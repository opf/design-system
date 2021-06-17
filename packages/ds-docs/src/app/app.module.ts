import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OpOptionListModule } from '@openproject/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    OpOptionListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
