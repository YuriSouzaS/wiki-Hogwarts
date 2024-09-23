import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Books {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
}

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
  private urlBook = 'https://potterapi-fedeperin.vercel.app/pt/books'
  private urlHouse = 'https://potterapi-fedeperin.vercel.app/pt/houses'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.urlBook);
  }

  getHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(this.urlHouse);
  }

}
