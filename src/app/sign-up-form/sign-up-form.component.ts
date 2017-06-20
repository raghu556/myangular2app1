import { Component, OnInit, OnDestroy } from '@angular/core';
import {LocalstorageDataService} from './../localstorage-data.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit, OnDestroy {

  ngOnInit() {
     this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.name = params.name;
        this.courses = (params.courses).split(',');
        this.contactNo = params.contactNo;
        this.email = params.email;
        this.enquiryDate = params.enquiryDate;
        this.qualification = params.qualification;
        this.experience = params.experience;
        this.status = params.status;
        this.comments = params.comments;
      }
    ) 
  }
  ngOnDestroy() {}

  usersObject = {};
  users: {};
  editUserData;
  //Model Data from View
  name: string;
  courses: string;
  contactNo: number;
  email: string;
  enquiryDate: string;
  qualification: string;
  experience: string;
  status: string;
  comments: string;

  constructor(private lsService: LocalstorageDataService,private activatedRoute: ActivatedRoute){
    this.editUserData = {};
    lsService.read("users") == null ? lsService.write('users', "{}") : "";
    this.users = lsService.read("users");
  }
  
  clearForm(){
    this.name = "";
    this.courses = "";
    this.contactNo = 0;
    this.email = "";
    this.enquiryDate = "";
    this.qualification = "";
    this.experience = "";
    this.status = "";
    this.comments = "";
  }

  submitFunction(){
    this.usersObject = this.users;
    var count = (this.usersObject == null ? 0 : (Object.keys(this.usersObject).length + 1));
    this.usersObject[count] = {};
    
    this.usersObject[count].name = this.name;
    this.usersObject[count].courses = this.courses;
    this.usersObject[count].contactNo = this.contactNo;
    this.usersObject[count].email = this.email;
    this.usersObject[count].enquiryDate = this.enquiryDate;
    this.usersObject[count].qualification = this.qualification;
    this.usersObject[count].experience = this.experience;
    this.usersObject[count].status = this.status;
    this.usersObject[count].comments = this.comments;

    this.lsService.write("users",JSON.stringify(this.usersObject));
    //localStorage.setItem('users',JSON.stringify(this.usersObject));
    
    //Displaying the Data in View/Console
    this.users = this.lsService.read("users");
    console.log(this.users);
    this.clearForm();
  }
}