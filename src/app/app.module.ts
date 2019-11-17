import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderPipe } from './core/pipes/order.pipe';
import { CardComponent } from './shared/components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { WrongComponent } from './pages/wrong/wrong.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPipe,
    CardComponent,
    HomeComponent,
    WrongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
