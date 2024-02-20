import { OnInit, OnDestroy, Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { tap, Subscription } from 'rxjs';
import { v4 } from 'uuid';

import { IBook, BooksService, CategoriesService } from '../shared';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss'],
})
export class AddEditBookComponent implements OnInit, OnDestroy {
  form?: UntypedFormGroup;

  private bookId?: string;
  private isEditMode = false;
  private readonly subscriptions = new Subscription();

  constructor(
    readonly categoriesService: CategoriesService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly booksService: BooksService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.queryParams['id'];
    this.isEditMode = this.bookId !== undefined;
    const book = this.booksService.books$.getValue().find(book => book.id === this.bookId);

    this.form = this.formBuilder.group({
      title: [book?.title || '', Validators.required],
      author: [book?.author || '', Validators.required],
      pages: [book?.pages || '', Validators.required],
      category: [book?.category || '', Validators.required],
    });
  }

  setCategoryValue(value: string): void {
    value === 'default' ? this.form?.get('category')?.reset() : this.form?.get('category')?.setValue(value);
  }

  saveBookData(): void {
    this.isEditMode ? this.updateBook() : this.addBook();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private addBook(): void {
    const value = this.form?.value;

    if (value) {
      const data: IBook = { ...value, id: v4() };

      this.booksService.addBook(data)
        .pipe(tap(() => this.router.navigateByUrl('')))
        .subscribe();
    }
  }

  private updateBook(): void {
    const value = this.form?.value;

    if (value && this.bookId !== undefined) {
      this.booksService.updateBook(this.bookId, value)
        .pipe(tap(() => this.router.navigateByUrl('')))
        .subscribe();
    }
  }
}
