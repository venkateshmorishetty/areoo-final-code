import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {  NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  constructor(private modalService: NgbModal, private dialog:MatDialog) {

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

  showNavBar(){
    this.opened = !this.opened;
    console.log("nav bar "+this.opened)
  }
}
