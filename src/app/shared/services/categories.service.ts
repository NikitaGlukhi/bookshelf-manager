import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, BehaviorSubject } from 'rxjs';

import { BASE_PATH } from '../constants';
import { ICategory } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  readonly categories$ = new BehaviorSubject<ICategory[]>([]);
  constructor(private readonly http: HttpClient) {}

  get(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${BASE_PATH}/categories`)
      .pipe(tap(categories => this.categories$.next(categories)));
  }
}
