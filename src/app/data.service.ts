import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

import { Post } from "./Post";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('iniciando servidor');
  }  

  getData(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
