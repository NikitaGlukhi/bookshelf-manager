import { Input, Output, Component, EventEmitter } from '@angular/core';
import { Categories, ReadStatus } from '../../enums';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  @Input() title?: string;
  @Input() author?: string;
  @Input() pages?: number;
  @Input() category?: Categories;
  @Input() readStatus?: ReadStatus;

  @Output() closed = new EventEmitter<void>();
}
