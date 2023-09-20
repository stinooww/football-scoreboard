import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FootballFixture} from "../model/football-fixture.model";
import {Subscription} from "rxjs";
import {FootballService} from "../service/football.service";
import {LocalStorageService} from "../service/local-storage.service";

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
  isLoading= false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private footballService: FootballService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const isDataOutdated = this.localStorageService.isDataOutdated();
    this.route.params.subscribe((params: Params) => {
      this.teamId= +params['teamId'];
      this.leagueId= +params['countryId'];
      if(this.teamId && this.leagueId) {
        const fixtures = this.localStorageService.getStorageInformation(this.teamId.toString());
        if(isDataOutdated || (fixtures && fixtures.length === 0)) {
          this.gameResultSub = this.footballService.fetchFixtures(this.teamId, this.leagueId)
            .subscribe((response: FootballFixture[]) => {
              this.latestResultArr = response;
              this.isLoading = false;
            });
        } else {
          this.latestResultArr = fixtures;
          this.isLoading = false;
        }
      }
    });

  }
  ngOnDestroy() {
    this.gameResultSub?.unsubscribe();
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
