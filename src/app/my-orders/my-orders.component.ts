import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNull } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  allTransactions:any;
  renentRedemptions:any;
  clicks:any;
  shares:any;

  //variables for down arrows
  allTransactionsArrow:boolean=false;
  recentRedemptionArrow:boolean=false;
  sharesArrow:boolean=false;
  historyArrow:boolean=false;
  clicksArrow:boolean=false;
  

  allTransactions_jsonURL = "../../assets/allTransactions.json";
  rencentRedemptions_jsonURL = "../../assets/recentRedmeptions.json" ;
  clicksData_jsonURL = "../../assets/clicksData.json";
  sharedData_jsonURL = "../../assets/sharedData.json" ;
  constructor(private http: HttpClient) { 
    this.getAllTransactionsHistoryJSON().subscribe(data => {
      this.allTransactions = data;
     });

     console.log("all transactions"+this.allTransactions)
     this.getRecentRedmptionsHistoryJSON().subscribe(data => {
      this.renentRedemptions = data;
     });

     this.getClicksHistoryJSON().subscribe(data => {
      this.clicks = data;
     });

     this.getSharedHistoryJSON().subscribe(data => {
      this.shares = data;
     });
  }

  ngOnInit(): void {
  }

  //reading jsons
  public getAllTransactionsHistoryJSON(): Observable<any> {

    return this.http.get(this.allTransactions_jsonURL);
  }
  public getRecentRedmptionsHistoryJSON(): Observable<any> {
    return this.http.get(this.rencentRedemptions_jsonURL);
  }
  public getClicksHistoryJSON(): Observable<any> {
    return this.http.get(this.clicksData_jsonURL);
  }
  public getSharedHistoryJSON(): Observable<any> {
    return this.http.get(this.sharedData_jsonURL);
  }



   callingAllTransactionsDropdown(){

    this.allTransactionsArrow=!this.allTransactionsArrow;

      var element = document.getElementById('alltransactions');
      if(element){
        var style = window.getComputedStyle(element);
        var height = style.getPropertyValue('height');
        if(height === "0px"){
          element.style.height = "200px";
        }else{
          element.style.height = "0px";
        }
        
      } 
   }

   callingRecentRedemptiopnsDropdown(){
      this.recentRedemptionArrow=!this.recentRedemptionArrow;
      var recentHistory = document.getElementById("recentRedemptions");
      if(recentHistory){
        var style = window.getComputedStyle(recentHistory);
        var height = style.getPropertyValue('height');
        if(height === "0px"){
          recentHistory.style.height = "200px";
        }else{
          recentHistory.style.height = "0px";
        }   
      } 
   }

   clickHisotryData(){ 
    this.historyArrow=!this.historyArrow;
      var recentHistory = document.getElementById("clickHistory");
      if(recentHistory){
        var style = window.getComputedStyle(recentHistory);
        var height = style.getPropertyValue('height');
        if(height === "0px"){
          recentHistory.style.height = "200px";
        }else{
          recentHistory.style.height = "0px";
        }   
      } 
   }

   clicksData(){  
     this.clicksArrow=!this.clicksArrow;
      var recentHistory = document.getElementById("clicksDiv")!;
      if(recentHistory){
        var style = window.getComputedStyle(recentHistory);
        var height = style.getPropertyValue('height');
        if(height === "0px"){
          recentHistory.style.height = "200px";
        }else{
          recentHistory.style.height = "0px";
        }   
      } 
   }

   sharedData(){
    this.sharesArrow=!this.sharesArrow;
   }

}
