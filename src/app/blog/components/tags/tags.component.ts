import { Component, inject, signal } from '@angular/core';
import Swal from 'sweetalert2';
import { TagService } from '../../services/tag.service';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  id = signal<number>(0);
  index = signal<number>(-1);
  mode = signal<string>('');
  label = signal('');
  catgories = signal<Tag[]>([]);

  tagService = inject(TagService);

  ngOnInit(): void {
    this.tagService.getAll().subscribe((res) => {
      this.catgories.set(res);
    });
  }

  createOrUpdate() {
    const tag: Tag = {
      label: this.label(),
    };

    if (this.id()) {
      this.update(tag);
    } else {
      this.store(tag);
    }
  }

  store(tag: Tag) {
    this.tagService.persist(tag).subscribe((res) => {
      this.label.set('');
      this.catgories.mutate((data) => data.push(res));
    });
  }

  update(data: Tag) {
    this.mode.set('update');
    data.id = this.id();

    this.tagService.update(data.id, data).subscribe((res) => {
      this.catgories.update((categories) =>
        categories.map((tag) => (tag.id === this.id() ? data : tag))
      );

      this.label.set('');
      this.id.set(0);
    });
  }

  edit(tag: Tag) {
    this.mode.set('edit');
    let { id, label } = tag;

    if (id) {
      this.id.set(id);
    }

    this.label.set(label);
  }

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tagService.delete(id).subscribe((res) => {
          this.catgories.update((categories) =>
            categories.filter((tag) => tag.id !== id)
          );

          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
          });
        });
      }
    });
  }

  selected(i: number) {
    this.index.set(i);
  }
}
