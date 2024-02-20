import { OnInit, Component } from '@angular/core';

import { BooksService, CategoriesService } from '../../services';
import { INavbarItem } from './models';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  readonly navItems: INavbarItem[] = [
    {
      name: 'All books',
      href: '',
    },
    {
      name: 'Manage categories',
      href: '/categories',
    },
  ];

  constructor(
    readonly categoriesService: CategoriesService,
    private readonly booksService: BooksService,
  ) {}

  ngOnInit(): void {
    this.categoriesService.get().subscribe();
  }

  getBooksByCategory(category: string): void {
    this.booksService.getByCategory(category).subscribe();
  }
}
