import { Component, OnInit } from '@angular/core';
import {LocalstorageDataService} from './../localstorage-data.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  userid: number;
  userData;
  name: string;
  courses: string;
  contactNo: number;
  email: string;
  enquiryDate: string;
  qualification: string;
  experience: string;
  status: string;
  comments: string;

  constructor(private activatedRoute: ActivatedRoute,public lsService: LocalstorageDataService, private router : Router) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe(
      (params: Params) => {
        if(Object.keys(params).length > 0)
        {
          this.lsService.editFlag = true;
          this.userid = parseInt(params.id) + 1;
          this.userData = (this.lsService.read('users'));
          
          this.name = this.userData['' + this.userid + ''].name;
          this.courses = this.userData['' + this.userid + ''].courses;
          this.contactNo = this.userData['' + this.userid + ''].contactNo;
          this.email = this.userData['' + this.userid + ''].email;
          this.enquiryDate = this.userData['' + this.userid + ''].enquiryDate;
          this.qualification = this.userData['' + this.userid + ''].qualification;
          this.experience = this.userData['' + this.userid + ''].experience;
          this.status = this.userData['' + this.userid + ''].status;
          this.comments = this.userData['' + this.userid + ''].comments;
        }
        else{
          this.lsService.editFlag = false;
        }
      }
    ) 
  }

  editFunction(){
    this.userData['' + this.userid + ''].name = this.name;
    this.userData['' + this.userid + ''].courses = this.courses;
    this.userData['' + this.userid + ''].contactNo = this.contactNo;
    this.userData['' + this.userid + ''].email = this.email;
    this.userData['' + this.userid + ''].enquiryDate = this.enquiryDate;
    this.userData['' + this.userid + ''].qualification = this.qualification;
    this.userData['' + this.userid + ''].experience = this.experience;
    this.userData['' + this.userid + ''].status = this.status;
    this.userData['' + this.userid + ''].comments = this.comments;

    this.lsService.write("users",JSON.stringify(this.userData));
    
    console.log(this.userData['' + this.userid + '']);
    this.router.navigateByUrl('/searchFilter');

  }

}
