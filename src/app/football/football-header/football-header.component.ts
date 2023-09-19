import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FootballService} from "../service/football.service";

@Component({
  selector: 'app-header',
  templateUrl: './football-header.component.html',
  styleUrls: ['./football-header.component.less']
})
export class FootballHeaderComponent implements OnInit{
  currentYear: number | undefined;
  constructor(protected footballService: FootballService) { }

  ngOnInit(): void {
     this.currentYear = this.footballService.calculateCurrentSeason();
  }
}
