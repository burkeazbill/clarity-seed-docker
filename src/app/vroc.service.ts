import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Headers }    from '@angular/http';
import { RequestOptions }    from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VrocService {

  constructor(private http: Http) { }

  getWorkflows() {
    let url = 'https://172.26.4.70:8281/vco/api/workflows/'
    //let url = 'https://192.168.0.179:8281/vco/api/workflows/';
    //let url = 'https://192.168.0.179:8281/vco/api/workflows/';
    //let url = 'https://192.168.0.179:8281/vco/api/';
    let headers = new Headers();
    //headers.append('Authorization', 'Basic ' + btoa("vcoadmin:vcoadmin"));
    headers.append('Authorization', 'Basic dmNvYWRtaW46dmNvYWRtaW4=');
    let options = new RequestOptions({ headers: headers });
    return this.http.get( url, options ).map(data => data.json());
  }

  

  checkWfExecutionStatus() {



  }
}
