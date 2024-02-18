import { SearchUsers } from '../models/search-users';
import { User } from '../models/user';
import { MembersService } from './../members.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
})
export class MembersListComponent implements OnInit {
  users: User[] = [];
  search: string = '';

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.retreiveAllMembers();
  }

  retreiveAllMembers() {
    this.membersService
      .membersList()
      .subscribe((res: User[]) => (this.users = res));
  }

  searchMember() {
    if (this.search) {
      this.membersService
        .searchMembers(this.search)
        .subscribe((res: User[]) => (this.users = res));
    } else {
      this.retreiveAllMembers();
    }
  }
}
