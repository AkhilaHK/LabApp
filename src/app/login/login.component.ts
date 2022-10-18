import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginArray : any =[];
 public user:string="";
 public password:string="";
 public status:string="";

 public Login(ctrl:any){
  if(this.user != "" && this.password != ""){
    this.status=`Login Successfull...!`;

  }
  else{
    this.status=`Login Failed...! Please login again`;
  }
 }

 public Login2(ctrl:any){
 this.loginArray.push({user2:this.user,password2:this.password});
 var lastIndex = this.loginArray.length-1;
 var lastItem = this.loginArray[lastIndex];
 if(lastItem.user2 != "" && lastItem.password2 != ""){
  this.status = `Login Successfull...!!!`;
 }
 else{
  this.status= `Login failed...! Please login again.`;
 }
 ctrl.style = "color:white; font-style:italic; background-colory:#7cb342"
 }

  constructor() { }

  ngOnInit(): void {
  }

}
