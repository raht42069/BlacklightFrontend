import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://backend-production-801b.up.railway.app/weeklyLeaderBoard';
  constructor(private httpClient: HttpClient) {}
  getUsers(page: number) {
    return this.httpClient.get(this.url + '?page=' + page);
  }
  
 
}

//blacklightvanshbackend.onrender.com