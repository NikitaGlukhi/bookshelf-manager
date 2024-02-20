import {Input, Output, Component, EventEmitter} from '@angular/core';
import { ICategory } from '../../models';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  @Input() categories?: ICategory[];
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory = 'default';
}
