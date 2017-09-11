import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http }       from '@angular/http';
import { Headers }    from '@angular/http';
import { RequestOptions }    from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router,
                private http: Http) {
    }

}
