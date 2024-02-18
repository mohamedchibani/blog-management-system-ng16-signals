import { User } from './user';

export interface SearchUsers {
  total_count: number;
  items: User[];
  incomplete_results: boolean;
}
