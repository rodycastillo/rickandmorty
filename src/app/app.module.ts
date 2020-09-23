import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarwarsModule } from './modules/starwars/starwars.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StarwarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
