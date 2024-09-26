import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Characterts {
  fullname: string;
  nickName: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: object;
  image: string;
  birthdate: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = 'https://potterapi-fedeperin.vercel.app/pt/characters';
  
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Characterts[]> {
    return this.http.get<Characterts[]>(this.url);
  }
}
