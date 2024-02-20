import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { v4 } from 'uuid';

import { tap, switchMap, Observable, BehaviorSubject } from 'rxjs';

import { BASE_PATH } from '../constants';
import { ICategory } from '../models';
import { camelize } from '../functions';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  readonly categories$ = new BehaviorSubject<ICategory[]>([]);
  constructor(private readonly http: HttpClient) {}

  get(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${BASE_PATH}/categories`)
      .pipe(tap(categories => this.categories$.next(categories)));
  }

  add(category: string): Observable<ICategory[]> {
    const control = camelize(category);
    const body: ICategory  = {
      id: v4(),
      name: category,
      control,
    };

    return this.http.post<ICategory[]>(`${BASE_PATH}/categories`, body)
      .pipe(switchMap(() => this.get()));
  }

  update(id: string, value: string): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`${BASE_PATH}/categories/${id}`, { name: value })
      .pipe(switchMap(() => this.get()));
  }

  delete(id: string): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`${BASE_PATH}/categories/${id}`)
      .pipe(switchMap(() => this.get()));
  }
}
