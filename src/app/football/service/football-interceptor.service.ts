import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import * as configFile from "../../../assets/config.json";
@Injectable()
export class FootballInterceptorService implements HttpInterceptor {
  config = configFile || {};
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const footballApiKey = this.config.footballApiKey.key;
    if(footballApiKey) {
      const modifiedReq = req.clone({
        headers: new HttpHeaders().set('x-rapidapi-key', footballApiKey)
      });
      return next.handle(modifiedReq);
    } else {
      return next.handle(req);
    }
  }
}
