import {NgModule} from "@angular/core";
import {FootballDetailComponent} from "./football-detail.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FootballDetailComponent
  ],
  imports: [ RouterModule, SharedModule]
})
export class FootballDetailModule {}
