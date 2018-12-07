import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  //I’m using the static data
  //You can also fetch the data using HttpClient service for backend APIs.
  users = [
    { "id": 1, "name": "Anil Singh", 'age' :31, "email": "admin12@gmail.com" },
    { "id": 2, "name": "Aradhya", 'age': 32, "email": "admin23@gmail.com"},
    { "id": 3, "name": "Reena Singh", 'age': 33, "email": "admin34@gmail.com"}
 ]

 /* (method) MyService.getUsers(): {
   "id": number;
   "name": string;
   'age': number;
   }[] */
 getUsers(){
   return this.users;
 }
}
