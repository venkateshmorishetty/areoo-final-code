import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersData:any;
  orders_jsonURL='./assets/ordersHistory.json';
  p:number=1

  constructor(private http: HttpClient) {
    this.getOrdersHistoryJSON().subscribe(data => {
      this.ordersData = data;
     });
   }

  ngOnInit(): void {
  }

  getOrdersHistoryJSON(){
    return this.http.get(this.orders_jsonURL);
  }

}
