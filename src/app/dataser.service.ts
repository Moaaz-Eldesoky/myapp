import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserService {
  constructor(private http: HttpClient) {}
  url = 'https://api.restful-api.dev/objects';
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
