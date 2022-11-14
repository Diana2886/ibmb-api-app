import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'k_gs64lbhd';
    const URL = 'https://imdb-api.com/en/API/Top250Movies';

    return next.handle(
      request.clone({
        url: `${URL}/${API_KEY}/${request.url}`,
      })
    );
  }
}
