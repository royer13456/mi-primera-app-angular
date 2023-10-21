import { Component } from '@angular/core';

import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'rodrigo quesada';
  age: number = 28;

  users: string[] = ['juan', 'beto', 'carlos'];

  posts: any[] = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  addUser(newUser:any) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user:any) {
    for (let i = 0; i < this.users.length; i++)
    if (user == this.users[i]) {
      this.users.splice(i, 1);
    }
  }

}
