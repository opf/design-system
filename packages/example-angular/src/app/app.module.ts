import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OpOptionListModule } from '@openproject/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,

    OpOptionListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
