import { OnInit, OnDestroy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { tap, Subscription } from 'rxjs';

import { CategoriesService } from '../shared';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  form = new FormGroup({});
  private readonly subscriptions = new Subscription();

  constructor(
    readonly categoriesService: CategoriesService,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form.addControl('newCategory', new FormControl('', Validators.required));

    const categoriesSub = this.categoriesService.categories$
      .pipe(
        tap(categories => {
          for (const category of categories) {
            if (!this.form?.get(category.control)) {
              this.form?.addControl(category.control, new FormControl(category.name, Validators.required));
            }
          }
        })
      ).subscribe();
    this.subscriptions.add(categoriesSub);
  }

  addNewCategory(): void {
    const value = this.form.get('newCategory')?.value;

    if (value) {
      this.categoriesService.add(value)
        .pipe(tap(() => this.form.get('newCategory')?.reset()))
        .subscribe();
    }
  }

  updateCategory(id: string, control: string): void {
    const value = this.form.get(control)?.value;

    if (value) {
      this.categoriesService.update(id, value).subscribe();
    }
  }

  deleteCategory(id: string): void {
    this.categoriesService.delete(id).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
