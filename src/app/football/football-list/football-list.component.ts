import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FootballStanding} from "../football-standing.model";
import {FootballService} from "../football.service";

@Component({
  selector: 'app-football-list',
  templateUrl: './football-list.component.html',
  styleUrls: ['./football-list.component.less']
})
export class FootballListComponent implements OnInit, OnDestroy {
  standingSub: Subscription | undefined;
  countryId: string | undefined;
  countryStanding: FootballStanding[] | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private footballService: FootballService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.countryId = params['countryId'];
        if(this.countryId) {
          this.countryStanding = this.footballService.getCountryInformation(this.countryId);
          if (this.countryStanding && this.countryStanding.length === 0) {
            this.standingSub = this.footballService.fetchStanding(this.countryId)
              .subscribe((data: FootballStanding) => {
                if(data) {
                 this.countryStanding?.push(data);
                }
            });
          }
        }
      });
  }

  ngOnDestroy() {
    this.standingSub?.unsubscribe();
  }
}
