import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiUrl = 'http://localhost:3000/articles';

  //constructor(private http: HttpClient) {}

  http = inject(HttpClient);

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getOne(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  persist(data: Article) {
    return this.http.post(this.apiUrl, data);
  }

  update(id: number, data: Article) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
