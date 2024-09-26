import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Spells {
  spells: string;
  use: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  url = 'https://potterapi-fedeperin.vercel.app/pt/spells';


  constructor(private http: HttpClient) { }

  getSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(this.url);
  }

}
