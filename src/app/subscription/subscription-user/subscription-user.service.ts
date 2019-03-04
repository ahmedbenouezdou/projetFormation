import { Injectable } from '@angular/core';
import { SubscriptionUser } from './subscription-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionUserService extends BehaviorSubject<SubscriptionUser[]>{

  static httpc: HttpClient;
  private url: string = environment.api_url + '';

  constructor(private router: Router, private http: HttpClient) {
        super([]);
        SubscriptionUserService.httpc = http;
   }

  public postInfo(info: SubscriptionUser): Observable<Object> {
    return this.http.post<SubscriptionUser>(this.url + '/subscription',info);
  }
}
