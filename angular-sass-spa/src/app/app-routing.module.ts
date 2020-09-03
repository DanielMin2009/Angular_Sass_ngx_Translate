import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { BankPanellEnComponent } from './Components/Shared/bank-panell-en/bank-panell-en.component';
import { BankPanellArComponent } from './Components/Shared/bank-panell-ar/bank-panell-ar.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bank-panell-en', component: BankPanellEnComponent },
  { path: 'bank-panell-ar', component: BankPanellArComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
