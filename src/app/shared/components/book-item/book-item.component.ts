import {
  Input,
  Output,
  OnInit,
  Component,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Categories, ReadStatus } from '../../enums';
import { BOOK_CATEGORIES, BOOK_READ_STATUS } from '../../constants';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() title?: string;
  @Input() category?: Categories;
  @Input() readStatus?: ReadStatus;

  @Output() bookSelected = new EventEmitter<void>();

  status?: string;
  bookCategory?: string;
  readonly statuses = ReadStatus;

  @HostListener('click')
  onBookSelected(): void {
    this.bookSelected.emit();
  }

  ngOnInit(): void {
    this.bookCategory = this.category ? BOOK_CATEGORIES[this.category] : 'N/A';
    this.status = this.readStatus ? BOOK_READ_STATUS[this.readStatus] : 'Not viewed';
  }
}
