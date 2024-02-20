import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReadStatus} from '../../enums';
import {BOOK_CATEGORIES, BOOK_READ_STATUS} from '../../constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input() title?: string;
  @Input() author?: string;
  @Input() pages?: number;
  @Input() category?: string;
  @Input() readStatus?: ReadStatus;

  @Output() closed = new EventEmitter<void>();

  status?: string;
  readonly statuses = ReadStatus;

  ngOnInit(): void {
    this.status = this.readStatus ? BOOK_READ_STATUS[this.readStatus] : 'Not viewed';
  }

  get isInWishList(): boolean {
    return this.readStatus === ReadStatus.wantToRead || this.readStatus === ReadStatus.reading || this.readStatus === ReadStatus.completed;
  }

  get isReading(): boolean {
    return this.readStatus === ReadStatus.reading || this.readStatus === ReadStatus.completed;
  }
}
