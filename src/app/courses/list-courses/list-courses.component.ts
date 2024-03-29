import { Course } from './../course';
import { Component, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent {
  editable = signal<boolean>(false);
  etatForm = signal<boolean>(false);

  myCourse = signal<Course>({
    title: '',
    price: 0,
  });

  courses = signal<Course[]>([
    {
      id: '1',
      title: 'Symfony',
      price: 600,
    },
    {
      id: '2',
      title: 'React',
      price: 800,
    },
    {
      id: '3',
      title: 'Angular',
      price: 500,
    },
  ]);

  toggleForm() {
    this.initCourse();
    this.editable.set(false);
    this.etatForm.update((etat) => !etat);
  }

  deleteCourse(myCourse: Course) {
    if (!confirm(`are you sure to delete this course ${myCourse.title} ?`)) {
      return;
    }

    this.courses.update((courses) =>
      courses.filter((course) => course.id != myCourse.id)
    );
  }

  addCourse() {
    const course = {
      ...this.myCourse(),
      id: uuidv4(),
    };

    this.courses.update((courses) => [course, ...courses]);

    this.initCourse();
  }

  initCourse() {
    this.myCourse.set({
      title: '',
      price: 0,
    });
  }

  editCourse(course: Course) {
    this.etatForm.set(true);
    this.editable.set(true);
    this.myCourse.set(course);
  }

  updateCourse() {
    this.etatForm.set(false);
    this.editable.set(false);
    this.initCourse();
  }
}
