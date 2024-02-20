import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditBookComponent } from './add-edit-book.component';

const routes: Routes = [{
  path: '',
  component: AddEditBookComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditBookRoutingModule {}
