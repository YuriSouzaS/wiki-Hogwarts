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


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private urlBook = 'https://potterapi-fedeperin.vercel.app/pt/books'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.urlBook);
  }
}
