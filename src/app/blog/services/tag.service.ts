import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor() {}

  getAll() {}

  getOne(id: number) {}

  persist(data: Tag) {}

  update(id: number, data: Tag) {}

  delete(id: number) {}
}
