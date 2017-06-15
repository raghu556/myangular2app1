import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies = [ {title: 't1', director : 'Brian', description: 'talk 1'},
            {title: 't2', director : 'Julie', description: 'talk 2'},
            {title: 't3', director : 'Julie', description: 'talk 2'},
            {title: 't4', director : 'Julie', description: 'talk 2'},
            {title: 't5', director : 'Julie', description: 'talk 2'}
          ];
  currentDate = new Date(); // April 15, 1988
  toggle = true;
  get format() {return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}