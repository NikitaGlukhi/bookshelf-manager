import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { CategoryFilterModule, NavbarModule } from '../shared';
import { AddEditBookComponent } from './add-edit-book.component';
import { AddEditBookRoutingModule } from './add-edit-book-routing.module';

@NgModule({
  declarations: [AddEditBookComponent],
  imports: [
    CommonModule,
    NavbarModule,
    CategoryFilterModule,
    ReactiveFormsModule,
    AddEditBookRoutingModule,
  ],
})
export class AddEditBookModule {}
