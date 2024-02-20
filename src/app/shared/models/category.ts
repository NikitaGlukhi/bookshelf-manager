import { IBaseEntity } from './base-entity';

export interface ICategory extends IBaseEntity {
  name: string;
  control: string;
}
