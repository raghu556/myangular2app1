import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {LocalstorageDataService} from './../localstorage-data.service';

@Component({
  selector: 'app-search-byexample',
  templateUrl: './search-byexample.component.html',
  styleUrls: ['./search-byexample.component.css']
})
export class SearchByexampleComponent {
  users: any[];

  numbers = Observable.timer(10000);
  currentDate = new Date();
  toggle = true;
  get format() {return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
  
  constructor(private lsService: LocalstorageDataService) { 
    lsService.read("users") == null ? lsService.write('users', "{}") : "";
    this.users = Object.keys(lsService.read("users")).map(function (key) { return (lsService.read("users"))[key]; });
  }
}
