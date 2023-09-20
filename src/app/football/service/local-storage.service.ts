import {Injectable} from "@angular/core";
import {FootballStanding} from "../model/football-standing.model";
import {FootballFixture} from "../model/football-fixture.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  dataCreated: Date = new Date();
  getStorageInformation(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  isDataOutdated(): boolean {
    const previousDate = new Date(this.getStorageInformation("taskCreatedAt"));
    const currentDate = this.dataCreated;
    const differenceInTime = currentDate.getTime() - previousDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if (differenceInDays > 1) {
      localStorage.clear();
      return true;
    }
    return false;
  }
  setCountryInformation(key: string, footballStanding: FootballStanding[]): void {
    localStorage.setItem(key, JSON.stringify(footballStanding));
    localStorage.setItem("taskCreatedAt", JSON.stringify(this.dataCreated));
  }

  setFixtureInformation(key: string, footballStanding: FootballFixture[]): void {
    localStorage.setItem(key, JSON.stringify(footballStanding));
    localStorage.setItem("taskCreatedAt", JSON.stringify(this.dataCreated));
  }
}
