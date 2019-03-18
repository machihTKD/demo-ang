

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenClassRoomsComponent } from './open-class-rooms/open-class-rooms.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';


/* the AppModule class with the @NgModule decorator */


@NgModule({
  declarations: [
    AppComponent,
    OpenClassRoomsComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
