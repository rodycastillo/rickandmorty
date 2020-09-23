import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ENDPOINT = 'https://rickandmortyapi.com/api/episode/';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  constructor(private http: HttpClient) {}

  getSTPeople() {
    return this.http.get(ENDPOINT).toPromise();
  }
}
