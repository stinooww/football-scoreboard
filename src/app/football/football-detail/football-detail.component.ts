import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FootballService} from "../football.service";
import {relative} from "@angular/compiler-cli";
import {FootballFixture, FootballFixtureRequest} from "./football-fixture.model";
import {Subscription} from "rxjs";

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
  constructor(private router: Router, private route: ActivatedRoute, protected footballService: FootballService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.teamId= +params['teamId'];
      this.leagueId= +params['countryId'];
      if(this.teamId && this.leagueId) {
        this.gameResultSub = this.footballService.fetchFixtures(this.teamId, this.leagueId)
          .subscribe((response: FootballFixture[]) => {
            this.latestResultArr = response;
          });
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
