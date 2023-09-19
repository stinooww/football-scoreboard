import {NgModule} from "@angular/core";
import {FootballDetailComponent} from "./football-detail.component";
import {RouterModule} from "@angular/router";
import {FootballDetailService} from "./football-detail.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    FootballDetailComponent
  ],
  providers: [FootballDetailService],
  imports: [RouterModule, CommonModule, NgOptimizedImage]
})
export class FootballDetailModule {}
