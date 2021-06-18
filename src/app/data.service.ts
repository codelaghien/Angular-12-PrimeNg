import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';

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

  public getQuestions(): Observable<Question[]> {
    const url = `${this.REST_API_SERVER}/questions`;
    return this.httpClient.get<Question[]>(url, this.httpOptions);
  }

  public postQuestion(payload: Question): Observable<Question> {
    const url = `${this.REST_API_SERVER}/questions`;
    return this.httpClient.post<Question>(url, payload, this.httpOptions);
  }
}
