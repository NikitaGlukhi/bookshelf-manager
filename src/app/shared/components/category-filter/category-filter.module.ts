import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryFilterComponent } from './category-filter.component';

@NgModule({
  declarations: [CategoryFilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [CategoryFilterComponent],
})
export class CategoryFilterModule {}
