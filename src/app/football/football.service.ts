import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FootballStanding } from "./model/football-standing.model";
import { map, Observable} from "rxjs";
import { FootballCountryRequest } from "./model/football-country.model";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  footballV3BaseUrl = 'https://v3.football.api-sports.io/';
  dataCreated = new Date();
  constructor(protected http: HttpClient) { }

  fetchStanding(countryId: string): Observable<FootballStanding[]> {
    const year: number = this.calculateCurrentSeason();
    const params = new HttpParams().set('league', countryId).set('season', year);
    return this.http.get<FootballCountryRequest>(this.footballV3BaseUrl + 'standings', { params })
      .pipe(
        map( (response: FootballCountryRequest) => {
          const { standings } = response?.response?.[0]?.league || {};
          let countryStanding: FootballStanding[] = standings.flat(1);
          this.setCountryInformation(countryId, countryStanding);
          return countryStanding;
        })

    );

  }

  calculateCurrentSeason(): number {
    const currentMonth = this.dataCreated.getMonth();
    const currentYear = this.dataCreated.getFullYear();
    return currentMonth < 7 ? currentYear - 1 : currentYear;
  }

  getCountryInformation(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  private setCountryInformation(key: string, footballStanding: FootballStanding[]): void {
    localStorage.setItem(key, JSON.stringify(footballStanding));
    localStorage.setItem("taskCreatedAt", JSON.stringify(this.dataCreated));
  }
}
