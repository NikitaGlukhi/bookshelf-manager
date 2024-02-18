import { Categories, ReadStatus } from '../enums';

export interface IBook {
  id: string;
  title: string;
  author: string;
  pages: number;
  category: Categories;
  readStatus?: ReadStatus;
}
