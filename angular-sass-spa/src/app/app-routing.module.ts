import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPanellEnComponent } from './Views/account-panell-en/account-panell-en.component';
import { AccountPanellArComponent } from './Views/account-panell-ar/account-panell-ar.component';

const ROUTES: Routes = [
  { path: 'account-panell-en', component: AccountPanellEnComponent },
  { path: 'account-panell-ar', component: AccountPanellArComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'account-panell-en' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
