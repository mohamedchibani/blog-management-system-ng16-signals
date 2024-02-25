import { CategoryService } from './../../services/category.service';
import { Component, signal, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  id = signal<number>(0);
  label = signal('');
  catgories = signal<Category[]>([]);

  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res) => {
      this.catgories.set(res);
    });
  }

  add() {
    const category: Category = {
      label: this.label(),
    };

    this.categoryService.persist(category).subscribe((res) => {
      this.label.set('');
      this.catgories.mutate((data) => data.push(res));
    });
  }

  edit(category: Category) {
    let { id, label } = category;

    if (id) {
      this.id.set(id);
    }

    this.label.set(label);
  }
}
