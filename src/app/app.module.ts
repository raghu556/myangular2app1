import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';     //Angular Material Module

import { ExponentialStrengthPipe,MyFilterPipe } from './exponentialstrength.pipe';   //Custom Filter
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //NG Boostrap

import {LocalstorageDataService} from './localstorage-data.service'  //Service

import { AppComponent } from './app.component';
import { SearchByexampleComponent } from './search-byexample/search-byexample.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { EditComponentComponent } from './edit-component/edit-component.component';

const appRoutes: Routes = [
  { path: 'searchFilter', component: SearchByexampleComponent },
  { path: 'form', component: SignUpFormComponent },
  { path: 'form/edit/:id', component: EditComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    MyFilterPipe,
    SearchByexampleComponent,
    SignUpFormComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LocalstorageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
