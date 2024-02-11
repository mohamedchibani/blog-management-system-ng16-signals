import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListCoursesComponent } from './list-courses/list-courses.component';

@NgModule({
  declarations: [ListCoursesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListCoursesComponent],
})
export class CoursesModule {}
