import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {  NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";



import { LocalStoresComponent } from './local-stores/local-stores.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  constructor(private modalService: NgbModal,  private matIconRegistry: MatIconRegistry,  private domSanitizer: DomSanitizer, private dialog:MatDialog) {
    this.matIconRegistry.addSvgIcon(
      "myaccount",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Stores.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "myOrders",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/My-Orders.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "withdraw",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Withdraw.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "affiliate",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Create-Affiliate.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "settings",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Setting.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "support",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Support.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "notifications",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/Notifications.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/navbar_icons/LOG-OUT.svg")
    );
  }
  closeResult = '';
  logincontent:boolean = true;
  title = 'areooo-front-end';
  userUnAuthenticated:boolean = true;
  displaySidenav:boolean = false;
  opened:boolean = false;


  open(content:any) {
    console.log("in the oen")
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.logincontent=true;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  signUp(){
    this.logincontent=!this.logincontent;
    console.log("signup content"+this.logincontent);
  }

  login(loginForm:NgForm){
   if(loginForm.value.username =="venkatesh" && loginForm.value.pwd == "123"){
    this.userUnAuthenticated=!this.userUnAuthenticated;
     console.log("login success")
     this.modalService.dismissAll("closed after login")
   } else {
    console.log("login fail")
   }
  }

  showNavandToolbar(check:boolean){
    var toolbar = document.getElementById("toolbar");
    console.log("chekc value "+check)

     if(toolbar){
        if(check){
          toolbar.style.display="flex"
        } else{
          toolbar.style.display="none"
        }
    }
  }


  localStoresOpen(){
    this.dialog.open(LocalStoresComponent);
  }
}
