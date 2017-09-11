import { Component, OnInit } from '@angular/core';
import { VrocService } from 'app/vroc.service';
import { Http }       from '@angular/http';
import { Headers }    from '@angular/http';
import { RequestOptions }    from '@angular/http';

@Component({
  selector: 'app-vroc',
  templateUrl: './vroc.component.html',
  styleUrls: ['./vroc.component.css'],
  providers: [ VrocService ]
})

export class vROCComponent implements OnInit {
  tweetMsg;
constructor (
             private http: Http) {}
  workflows = [];
  workflow = { name: "name", id: "id", version: "version", category: "category" }
  total = 0;
 ngOnInit(){this.getWorkflows()};

  getWorkflows() {
    let url = 'https://172.26.4.70:8281/vco/api/workflows/'
    //let url = 'https://192.168.0.179:8281/vco/api/workflows/';
    //let url = 'https://192.168.0.179:8281/vco/api/workflows/';
    //let url = 'https://192.168.0.179:8281/vco/api/';
    let headers = new Headers();
    //headers.append('Authorization', 'Basic ' + btoa("vcoadmin:vcoadmin"));
    headers.append('Authorization', 'Basic dmNvYWRtaW46dmNvYWRtaW4=');
    let options = new RequestOptions({ headers: headers });
    this.http.get( url, options ).map(data => data.json())
                                 .subscribe(data => {
                                            this.total = data.total;
                                            data.link.forEach(wf => {
                                              wf.attributes.forEach(attribute => {
                                                if (attribute.name == 'name')         { this.workflow.name     = attribute.value;  }
                                                if (attribute.name == 'version')      { this.workflow.version  = attribute.value; }
                                                if (attribute.name == 'id')           { this.workflow.id       = attribute.value; }
                                                if (attribute.name == 'categoryName') { this.workflow.category = attribute.value; }
                                              });
                                              this.workflows.push( { href: wf.href, name: this.workflow.name, id: this.workflow.id, version: this.workflow.version, category: this.workflow.category } );
                                            });
                                          })
  };

  runWorkflow(wfId: string): void {
    console.log(this.tweetMsg);
    let inputs = { "parameters": [
            {
                "value": {
                    "string": {
                        "value": this.tweetMsg
                    }
                },
                "type": "String",
                "name": "status",
                "scope": "local"
            }
        ]
    }
    let url = 'https://172.26.4.70:8281/vco/api/workflows/'+wfId +'/executions'
    let headers = new Headers();
    headers.append('Authorization', 'Basic dmNvYWRtaW46dmNvYWRtaW4=');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    //this.http.post( url, inputs, options ).map(data => data.json()).subscribe(data => { console.log(data); })
    this.http.post( url, inputs, options ).subscribe(data => { console.log(data); })
  }

}



