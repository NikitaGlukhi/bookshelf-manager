import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, BehaviorSubject } from 'rxjs';

import { BASE_PATH } from '../constants';
import { IBook } from '../models';

@Injectable({ providedIn: 'root' })
export class BooksService {
  readonly books$ = new BehaviorSubject<IBook[]>([]);

  constructor(private readonly http: HttpClient) {}

  get(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${BASE_PATH}/books`)
      .pipe(tap(books => this.books$.next(books)));
  }

  getByCategory(category: string): Observable<IBook[]> {
    const param = category !== 'default' ? `?category=${category}` : '';

    return this.http.get<IBook[]>(`${BASE_PATH}/books${param}`)
      .pipe(tap(books => this.books$.next(books)));
  }
}
