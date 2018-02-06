import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SampleService {

  // options = new RequestOptions();
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
  }

  public sayHello() {
    return 'Hello';
  }


  public getConfig() {
    return this.http.get(this.configUrl);
  }

  public getUser(): Observable<any> {
    console.log('SampleService.getUser()');
    console.log(this.http);
    // return this.http.get('https://conduit.productionready.io/api/profiles/eric', this.options)
    //   .map(resp => resp.json());
    return this.http.get('https://conduit.productionready.io/api/profiles/eric');
      // .map(resp => resp.json());
  }
}


