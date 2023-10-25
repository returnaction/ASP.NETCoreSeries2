import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {CollapseModule} from 'ngx-bootstrap/collapse';
// import { RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';



// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './home/home.component';
// import { MenuComponent } from './menu/menu.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     MenuComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule,
//     BrowserAnimationsModule,
//     CollapseModule.forRoot()
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
