import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './models/user';
import { SearchUsers } from './models/search-users';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  membersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map((users) =>
        users.map(({ login, avatar_url, html_url }: User) => {
          return {
            login,
            avatar_url,
            html_url,
          };
        })
      )
    );
  }

  searchMembers(member: string): Observable<User[]> {
    return this.http
      .get<SearchUsers>(`${this.apiUrl}/search/users?q=${member}`)
      .pipe(
        map(({ items }) =>
          items.map(({ login, avatar_url, html_url }: User) => {
            return {
              login,
              avatar_url,
              html_url,
            };
          })
        )
      );
  }
}
