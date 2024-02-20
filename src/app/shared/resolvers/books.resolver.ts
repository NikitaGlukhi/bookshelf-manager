import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { IBook } from '../models';
import { BooksService } from '../services';

@Injectable({ providedIn: 'root' })
export class BooksResolver implements Resolve<IBook[]> {
  constructor(private readonly booksService: BooksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBook[]> {
    return this.booksService.get();
  }
}
