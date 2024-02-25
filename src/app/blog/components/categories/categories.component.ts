import { CategoryService } from './../../services/category.service';
import { Component, signal, inject } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  label = signal('');
  catgories = signal<Category[]>([]);

  categoryService = inject(CategoryService);

  add() {
    const category: Category = {
      label: this.label(),
    };

    this.categoryService.persist(category).subscribe((res) => {
      console.log(res);
      this.label.set('');
    });
  }
}
