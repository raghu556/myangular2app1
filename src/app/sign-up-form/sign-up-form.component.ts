import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent {
  usersObject = {};
  users: {};
  name: string;
  address: string;
  state: string;
  
  constructor(){
    localStorage.setItem('users', "{}");
    this.users = localStorage.getItem("users");
  }
  
  submitFunction(){
    var count = (this.usersObject == null ? 0 : (Object.keys(this.usersObject).length + 1));
    this.usersObject[count] = {};
    
    this.usersObject[count].name = this.name;
    this.usersObject[count].address = this.address;
    this.usersObject[count].state = this.state;

    localStorage.setItem('users',JSON.stringify(this.usersObject));
    
    //Displaying the Data in View/Console
    this.users = JSON.parse(localStorage.getItem("users"));
    console.log(this.users);
  }
}