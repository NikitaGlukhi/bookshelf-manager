import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { CategoryFilterModule } from '../category-filter/category-filter.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, CategoryFilterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
