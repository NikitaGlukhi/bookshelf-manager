import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from '../shared';
import { CategoriesComponent} from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {}
