import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FootballListComponent} from "./football/football-list/football-list.component";
import {FootballResolverService} from "./football/football-resolver.service";
import {FootballComponent} from "./football/football.component";
import {FootballDetailComponent} from "./football/football-detail/football-detail.component";

const routes: Routes = [
  { path: '', component: FootballComponent, pathMatch: 'full', resolve: [FootballResolverService]},
  { path: 'football/:countryId' , component: FootballListComponent},
  { path: 'football/:countryId/:teamId' , component:FootballDetailComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'football/:countryId/:teamId',
//   loadChildren: () => import('./football/football-detail/football-detail.module').then(m => m.FootballDetailModule)
// },
