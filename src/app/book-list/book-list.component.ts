import { Component } from '@angular/core';
import { Categories, IBook, ReadStatus } from '../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: IBook[] = [
    {
      id: '1',
      title: 'Test 1',
      author: 'John Doe',
      pages: 347,
      category: Categories.horror,
    },
    {
      id: '2',
      title: 'Test 2',
      author: 'John Doe',
      pages: 347,
      category: Categories.horror,
      readStatus: ReadStatus.wantToRead,
    },
    {
      id: '3',
      title: 'Test 3',
      author: 'John Doe',
      pages: 347,
      category: Categories.horror,
      readStatus: ReadStatus.reading,
    },
    {
      id: '4',
      title: 'Test 4',
      author: 'John Doe',
      pages: 347,
      category: Categories.horror,
      readStatus: ReadStatus.completed,
    },
  ];
  selectedBookId?: string;
}
