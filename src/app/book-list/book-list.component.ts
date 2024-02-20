import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService, ReadStatus } from '../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  selectedBookId?: string;

  constructor(
    readonly booksService: BooksService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  navigateToEditMode(): void {
    this.router.navigateByUrl(`edit-book?id=${this.selectedBookId}`);
  }

  updateBook(id: string, readStatus: ReadStatus): void {
    let book = this.booksService.books$.getValue().find(book => book.id === id);

    if (book) {
      book = { ...book, readStatus };

      this.booksService.updateBook(id, book).subscribe();
    }
  }

  removeBook(id: string): void {
    this.booksService.removeBook(id).subscribe();
  }

  private getBooks(): void {
    this.booksService.get().subscribe();
  }
}
