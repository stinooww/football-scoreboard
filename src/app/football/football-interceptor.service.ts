import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FootballInterceptorService implements HttpInterceptor{
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const footballApiKey= 'fd4182265ea9fa72eed8d00ea72d6427';
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
