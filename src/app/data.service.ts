import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from './link.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getLinks(authorId: number): Observable<Link[]> {
    const url = `${this.REST_API_SERVER}/links?authorId=` + authorId;
    return this.httpClient.get<Link[]>(url, this.httpOptions);
  }

  public postLink(payload: Link): Observable<Link> {
    const url = `${this.REST_API_SERVER}/links`;
    return this.httpClient.post<Link>(url, payload, this.httpOptions);
  }
}
