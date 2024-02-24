import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAll() {}

  getOne(id: number) {}

  persist(data: Category) {}

  update(id: number, data: Category) {}

  delete(id: number) {}
}
