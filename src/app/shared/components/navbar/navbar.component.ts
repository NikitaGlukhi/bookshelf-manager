import { Component } from '@angular/core';

import { INavbarItem } from './models';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly navItems: INavbarItem[] = [
    {
      name: 'All books',
      href: '/main',
    },
    {
      name: 'My books',
      href: '/my-books'
    }
  ];
}
