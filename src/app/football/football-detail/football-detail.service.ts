import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import {FootballService} from "../football.service";
import {FootballFixture, FootballFixtureRequest} from "../model/football-fixture.model";

@Injectable({
  providedIn: 'root'
})
export class FootballDetailService {
  footballV3BaseUrl = 'https://v3.football.api-sports.io/';
  dataCreated = new Date();
  constructor(protected http: HttpClient, protected footballService: FootballService) { }

  fetchFixtures(team: number, league: number): Observable<FootballFixture[]> {
    const year: number = this.footballService.calculateCurrentSeason();
    return this.http.get<FootballFixtureRequest>(this.footballV3BaseUrl + 'fixtures', {
      params: new HttpParams().set('league', league).set('season', year).set('team', team).set('last', 10)
    }).pipe(
      map((response: FootballFixtureRequest) => {
        let latestResultArr: FootballFixture[] = [];
        if(response && response.response.length > 0) {
          response.response.map((fixtures: FootballFixture) => {
            let {teams, goals} = fixtures;
            latestResultArr.push({teams: teams, goals: goals});
          })
        }
        this.setFixtureInformation(team.toString(), latestResultArr)
        return latestResultArr;
      }));
  }

  getFixtureInformation(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  private setFixtureInformation(key: string, footballStanding: FootballFixture[]): void {
    localStorage.setItem(key, JSON.stringify(footballStanding));
    localStorage.setItem("taskCreatedAt", JSON.stringify(this.dataCreated));
  }
}
