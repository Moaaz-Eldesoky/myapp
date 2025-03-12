import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserService {
  private apiUrl = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // deleteData(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
  // the API dosn't support delete methouds
}
