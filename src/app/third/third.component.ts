import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.sass']
})
export class ThirdComponent {
  title = 'client';
  UID: number | undefined;
  responseNumber: number | undefined; // Variable to store the number from the response

  constructor(
    private countryService: CountryService,
    private http: HttpClient
  ) {}

  save() {
    // Prepare the data to be sent
    const formData = { UID: this.UID };

    // Send the data to the server
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set your desired content type
    })
    this.http
      .post<any>('https://backend-production-801b.up.railway.app/rank', formData, {headers})
      .subscribe((response) => {
        // Assign the response number to the variable
        this.responseNumber = response[0].user_rank; // Assuming the number is the first item in the response array
      });
  }
}
