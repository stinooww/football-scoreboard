import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FootballService} from "../football.service";

@Component({
  selector: 'app-header',
  templateUrl: './football-header.component.html',
  styleUrls: ['./football-header.component.less']
})
export class FootballHeaderComponent implements OnInit, OnDestroy{
  yearSubscription: Subscription | undefined;
  currentYear: number | undefined;

  constructor(protected footballService: FootballService) { }

  ngOnInit(): void {
    // this.yearSubscription = this.footballService.currentYearChanged
    //   .subscribe(
    //     (year: number) => {
    //       this.currentYear = year;
    //     })
     this.currentYear = this.footballService.calculateCurrentSeason();
    // if(!this.currentYear) {
    //   this.footballService.fetchLatestSeason().subscribe(data => {
    //     this.currentYear =  data;
    //   })
    // }
  }

  ngOnDestroy() {
   // this.yearSubscription?.unsubscribe();
  }


}
