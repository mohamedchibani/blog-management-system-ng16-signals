import { Injectable, inject } from '@angular/core';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  apiUrl = 'http://localhost:3000/tags';

  constructor() {}

  http = inject(HttpClient);

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getOne(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  persist(data: Tag) {
    return this.http.post(this.apiUrl, data);
  }

  update(id: number, data: Tag) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
