import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { FootballStanding } from "../model/football-standing.model";
import { map, Observable} from "rxjs";
import { FootballCountryRequest } from "../model/football-country.model";
import {FootballFixture, FootballFixtureRequest} from "../model/football-fixture.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  footballV3BaseUrl = 'https://v3.football.api-sports.io/';
  dataCreated = new Date();
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  fetchStanding(countryId: string): Observable<FootballStanding[]> {
    const year: number = this.calculateCurrentSeason();
    const params = new HttpParams().set('league', countryId).set('season', year);
    return this.http.get<FootballCountryRequest>(this.footballV3BaseUrl + 'standings', { params })
      .pipe(
        map( (response: FootballCountryRequest) => {
          const { standings } = response?.response?.[0]?.league || {};
          let countryStanding: FootballStanding[] = standings.flat(1);
          this.localStorageService.setCountryInformation(countryId, countryStanding);
          return countryStanding;
        })
    );
  }

  fetchFixtures(team: number, league: number): Observable<FootballFixture[]> {
    const year: number = this.calculateCurrentSeason();
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
        this.localStorageService.setFixtureInformation(team.toString(), latestResultArr)
        return latestResultArr;
      }));
  }

  calculateCurrentSeason(): number {
    const currentMonth = this.dataCreated.getMonth();
    const currentYear = this.dataCreated.getFullYear();
    return currentMonth < 7 ? currentYear - 1 : currentYear;
  }
}
