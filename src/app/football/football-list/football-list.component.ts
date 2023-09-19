import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FootballStanding} from "../model/football-standing.model";
import {FootballService} from "../service/football.service";

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
          const standings: FootballStanding[] = this.footballService.getStorageInformation(this.countryId);
          if (standings && standings.length === 0) {
            this.standingSub = this.footballService.fetchStanding(this.countryId)
              .subscribe((data: FootballStanding[]) => {
                if(data) {
                  this.countryStanding = data;
                }
            });
          } else {
           this.countryStanding = standings;
          }
        }
      });
  }

  ngOnDestroy() {
    this.standingSub?.unsubscribe();
  }
}
