import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';     //Angular Material Module

import { ExponentialStrengthPipe,MovieFilterPipe } from './exponentialstrength.pipe';   //Custom Filter
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchByexampleComponent } from './search-byexample/search-byexample.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const appRoutes: Routes = [
  { path: 'searchFilter', component: SearchByexampleComponent },
  { path: 'form',      component: SignUpFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    MovieFilterPipe,
    SearchByexampleComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
