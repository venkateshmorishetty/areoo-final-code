import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  selectedValue:any = "walletaccounts";
  amount:any;
  constructor() { }

  ngOnInit(): void {
    this.selectOption()
  }

  selectOption(){
    if(this.selectedValue==="paytm" || this.selectedValue==="monbikwik"){
      var element = document.getElementById('pwdinput');
      if(element){
        element.style.display="block";        
      } 
    }
    // console.log(" amount "+this.amount)
    // console.log(this.amount<10)
    // var element = document.getElementById('warning');
    // if(this.amount<10){
      
    //   if(element){
    //     element.style.display="block";        
    //   } 
    // }else{
      
    //   if(element){
    //     element.style.display="none";        
    //   } 
    // }

  }

}
