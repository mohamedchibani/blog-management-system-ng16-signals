import { TagService } from './../../services/tag.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent implements OnInit {
  ngOnInit(): void {
    this.getCategories();
    this.getTags();
  }

  categoryService = inject(CategoryService);
  tagService = inject(TagService);

  categories = signal<Category[]>([]);
  tags = signal<Tag[]>([]);

  getCategories() {
    this.categoryService.getAll().subscribe((res) => this.categories.set(res));
  }

  getTags() {
    this.tagService.getAll().subscribe((res) => this.tags.set(res));
  }
}
