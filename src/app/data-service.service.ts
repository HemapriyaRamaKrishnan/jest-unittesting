import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    const url='https://jsonplaceholder.typicode.com/todos/1'
    return this.http.get(url);
  }

  postData(data : any) : Observable<any> {
    const url='https://jsonplaceholder.typicode.com/todos/1'
    return this.http.post(data,url);

  }
}
