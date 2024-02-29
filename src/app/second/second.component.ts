import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  title = 'client';
  userService: any;
  pagination: number = 0;
  Users: any;
  allUsers: any;
  CountryCode: any;
  showTable: boolean = false; 

  constructor(private http: HttpClient) {}

  save() {
    this.fetchUsers();
    this.showTable = true;
  }

  fetchUsers() {
    const formData = { CountryCode: this.CountryCode };

    // Send the data to the server
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set your desired content type
    });
    this.http
      .post<any>('https://backend-production-801b.up.railway.app/leaderboardByCountry', formData, {
        headers,
      })
      .subscribe((response) => {
        this.Users = response;
        this.allUsers = response.length;
      });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchUsers();
  }
  ngOnInit() {
    this.fetchUsers();
    console.log(this.fetchUsers());
  }
}
