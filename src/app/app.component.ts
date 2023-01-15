import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'demo-DSV';
  //Variable to store id from user input
  id = 0;

  //Object to store JSON 
  obj = "Waiting for data";

  //Creation of object to make http request
  constructor(private http:HttpClient) { }

  
  //Function that makes http request to server and store data coming from it
  getInfo() {
    this.http.get<any>('https://mytms.us.dsv.com/utiservices/tracking/simple/v2/json/paynumber/'+this.id).subscribe(data => {
      this.obj=data;
    })
  }

}




