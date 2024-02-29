import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
      Users: any;
      allUsers: number = 0;
      pagination: number = 0;
      constructor(private userService: UserService) {}
      
      fetchUsers() {
        this.userService.getUsers(this.pagination).subscribe((res: any) => {
          this.Users = res;
          this.allUsers = res.total;
          console.log(res);
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
