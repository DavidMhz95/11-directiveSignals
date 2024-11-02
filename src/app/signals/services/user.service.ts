import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'https://reqres.in/api/users'

  getUserById(id: number): Observable<User>  {

    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map(response => response.data),
        tap(user => console.log(user))
      );
  }

}
