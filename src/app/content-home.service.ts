import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Houses {
  house: string;
  emoji: string;
  founder: string;
  colors: object;
  animal: string;
}


@Injectable({
  providedIn: 'root'
})

export class ContentHomeService {
  private urlHouse = 'https://potterapi-fedeperin.vercel.app/pt/houses'

  constructor(private http: HttpClient) { }

  getHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(this.urlHouse);
  }

}
