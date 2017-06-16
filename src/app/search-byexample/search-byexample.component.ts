import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-byexample',
  templateUrl: './search-byexample.component.html',
  styleUrls: ['./search-byexample.component.css']
})
export class SearchByexampleComponent implements OnInit {
  movies = [ {title: 't1', director : 'Brian', description: 'talk 1'},
            {title: 't2', director : 'Julie', description: 'talk 2'},
            {title: 't3', director : 'Maria', description: 'talk 2'},
            {title: 't4', director : 'Bacson', description: 'talk 2'},
            {title: 't5', director : 'Test', description: 'talk 2'}
          ];
  
  numbers = Observable.timer(10000);
  currentDate = new Date();
  toggle = true;
  get format() {return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
