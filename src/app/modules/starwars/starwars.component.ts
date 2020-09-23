import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
})
export class StarwarsComponent implements OnInit {
  constructor(private starwarsService: StarwarsService) {}

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Episode Name',
      },
      episode: {
        title: 'Number',
      },
      air_date: {
        title: 'Release Date',
      },
      url: {
        title: 'Link',
      },
    },
  };

  data = [];

  async ngOnInit(): Promise<any> {
    const people = await this.starwarsService.getSTPeople();
    this.data = people['results'];
    console.log(people['results']);
  }
  // ngOnInit() {
  //   console.log('Hola');
  // }
}
