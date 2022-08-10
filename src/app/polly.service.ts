import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollyService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  speak(data: any) {
    return this.http.post(this.url +
      "/speak", data, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    })
  }
}
