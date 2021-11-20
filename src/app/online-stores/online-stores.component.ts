import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-online-stores',
  templateUrl: './online-stores.component.html',
  styleUrls: ['./online-stores.component.css']
})
export class OnlineStoresComponent implements OnInit {

  private marketPlace_jsonURL = './assets/marketplace.json';
  marketPlaceData:any;

  constructor(private http: HttpClient) {
    //getting market place json data 
  this.getMarketPlaceJSON().subscribe(data => {
    this.marketPlaceData = data;
   });
   }

  ngOnInit(): void {
  }

  public getMarketPlaceJSON(): Observable<any> {
    return this.http.get(this.marketPlace_jsonURL);
  }

}
