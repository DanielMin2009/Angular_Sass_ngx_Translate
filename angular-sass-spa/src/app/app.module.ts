import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { BankPanellEnComponent } from './Components/Shared/bank-panell-en/bank-panell-en.component';
import { BankPanellArComponent } from './Components/Shared/bank-panell-ar/bank-panell-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankPanellEnComponent,
    BankPanellArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
