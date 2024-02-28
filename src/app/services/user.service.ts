import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://blacklightvanshbackend.onrender.com/weeklyLeaderBoard';
  constructor(private httpClient: HttpClient) {}
  getUsers(page: number) {
    return this.httpClient.get(this.url + '?page=' + page);
  }
  
 
}