import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RestaurantTableComponent } from './components/restaurant-table.component';
import { ModalComponent } from './components/modal.component';
import { RestaurantDataService } from './services/restaurant-data-service'

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [RestaurantDataService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
