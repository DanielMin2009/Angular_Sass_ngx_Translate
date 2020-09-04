import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPanellEnComponent } from './Views/account-panell-en/account-panell-en.component';
import { AccountPanellArComponent } from './Views/account-panell-ar/account-panell-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountPanellEnComponent,
    AccountPanellArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
