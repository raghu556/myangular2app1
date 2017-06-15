import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExponentialStrengthPipe,MovieFilterPipe } from './exponentialstrength.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
