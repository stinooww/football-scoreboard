import {Component, Input, OnInit} from '@angular/core';
import {FootballStanding} from "../../football-standing.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-football-item',
  templateUrl: './football-item.component.html',
  styleUrls: ['./football-item.component.less']
})
export class FootballItemComponent implements OnInit {
  @Input() standing: FootballStanding | undefined;
  @Input() index: number = 0;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onShowTeamsDetail(teamId: number | undefined) {
    if(teamId) {
      this.router.navigate(['./', teamId, ], {relativeTo: this.route})
    }
  }
}
