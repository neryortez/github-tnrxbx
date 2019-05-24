import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingComponent } from './landing/landing.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DavidFotoComponent } from './david-foto/david-foto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: 'enabled',
      // enableTracing: true,
      }
      ),
    FormsModule,
    MatButtonModule,
     ],
  declarations: [ AppComponent, HelloComponent, LandingComponent, InfoComponent, ContactoComponent, DavidFotoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
