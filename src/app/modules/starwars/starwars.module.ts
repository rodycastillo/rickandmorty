import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StarwarsComponent } from './starwars.component';
import { StarwarsService } from './starwars.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [StarwarsComponent],
  imports: [CommonModule, HttpClientModule, Ng2SmartTableModule],
  providers: [StarwarsService],
  exports: [StarwarsComponent],
})
export class StarwarsModule {}
