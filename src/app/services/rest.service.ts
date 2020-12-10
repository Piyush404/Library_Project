import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../UserBook/users';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { ErrorObservable} from 'rxjs/observable/ErrorObservable';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient) { }
  url: string = "http://localhost:3000/Users";
  getUsers() {
    return this.http.get<Users[]>(this.url);
  }
  AddBook(obj: any) {

    this.http.post('http://localhost:3000/Users', obj

    )
      .subscribe(res => console.log(res));
  }
  RemoveBook(id : string){​​​​

    return this.http.delete('http://localhost:3000/Users/' + id)
 
  }​​​​
}
