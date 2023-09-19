import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FootballFixture} from "../model/football-fixture.model";
import {Subscription} from "rxjs";
import {FootballDetailService} from "./football-detail.service";

@Component({
  selector: 'app-football-detail',
  templateUrl: './football-detail.component.html',
  styleUrls: ['./football-detail.component.less']
})
export class FootballDetailComponent implements OnInit, OnDestroy {
  teamId: number | undefined;
  leagueId: number | undefined;
  latestResultArr: FootballFixture[] = [];
  gameResultSub: Subscription | undefined;
  constructor(private router: Router, private route: ActivatedRoute, protected footballDetailService: FootballDetailService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.teamId= +params['teamId'];
      this.leagueId= +params['countryId'];
      if(this.teamId && this.leagueId) {
        const fixtures = this.footballDetailService.getFixtureInformation(this.teamId.toString());
        if(fixtures && fixtures.length === 0) {
          this.gameResultSub = this.footballDetailService.fetchFixtures(this.teamId, this.leagueId)
            .subscribe((response: FootballFixture[]) => {
              this.latestResultArr = response;
            });
        } else {
          this.latestResultArr = fixtures;
        }
      }
    })
  }
  ngOnDestroy() {
    this.gameResultSub?.unsubscribe();
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

}
