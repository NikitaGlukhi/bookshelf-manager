import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./book-list/book-list.module')
      .then(module => module.BookListModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module')
      .then(module => module.CategoriesModule),
  },
  {
    path: 'add-book',
    loadChildren: () => import('./add-edit-book/add-edit-book.module')
      .then(module => module.AddEditBookModule),
  },{
    path: 'edit-book',
    resolve: [BooksResolver],
    loadChildren: () => import('./add-edit-book/add-edit-book.module')
      .then(module => module.AddEditBookModule),
  },

  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
