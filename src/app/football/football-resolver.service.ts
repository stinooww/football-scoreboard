import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({providedIn: 'root' })
export class FootballResolverService implements Resolve<any> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const previousDate = new Date(JSON.parse(localStorage.getItem('taskCreatedAt') || '[]'));
    if(previousDate) {
      const currentDate = new Date();
      const differenceInTime = currentDate.getTime() - previousDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      if (differenceInDays > 1) {
        localStorage.clear();
      }
    }
  }
}

