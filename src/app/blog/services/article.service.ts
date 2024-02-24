import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:3000/articles');
  }

  getOne(id: number) {
    return this.http.get(`http://localhost:3000/articles/${id}`);
  }

  persist(data: Article) {
    return this.http.post('http://localhost:3000/articles', data);
  }

  update(id: number, data: Article) {
    return this.http.put(`http://localhost:3000/articles/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }
}
