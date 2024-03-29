import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { GithubMembersModule } from './github-members/github-members.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    GithubMembersModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
