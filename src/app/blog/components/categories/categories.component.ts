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
  index = signal<number>(-1);
  label = signal('');
  catgories = signal<Category[]>([]);

  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res) => {
      this.catgories.set(res);
    });
  }

  createOrUpdate() {
    const category: Category = {
      label: this.label(),
    };

    if (this.id()) {
      this.update(category);
    } else {
      this.store(category);
    }
  }

  store(category: Category) {
    this.categoryService.persist(category).subscribe((res) => {
      this.label.set('');
      this.catgories.mutate((data) => data.push(res));
    });
  }

  update(data: Category) {
    data.id = this.id();

    this.categoryService.update(data.id, data).subscribe((res) => {
      this.catgories.update((categories) =>
        categories.map((category) =>
          category.id === this.id() ? data : category
        )
      );

      this.label.set('');
      this.id.set(0);
    });
  }

  edit(category: Category) {
    let { id, label } = category;

    if (id) {
      this.id.set(id);
    }

    this.label.set(label);
  }

  delete(id: number) {
    if (!confirm('Are you sure to delete this item ?')) {
      return;
    }

    this.categoryService.delete(id).subscribe((res) => {
      this.catgories.update((categories) =>
        categories.filter((category) => category.id !== id)
      );
    });
  }

  selected(i: number) {
    this.index.set(i);
  }
}
