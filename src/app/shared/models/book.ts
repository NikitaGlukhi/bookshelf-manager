import { ReadStatus } from '../enums';
import { IBaseEntity } from './base-entity';

export interface IBook extends IBaseEntity {
  title: string;
  author: string;
  pages: number;
  category: string;
  readStatus?: ReadStatus;
}
