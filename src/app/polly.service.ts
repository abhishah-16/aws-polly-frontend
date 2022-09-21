import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollyService {
  url = "https://amazon-polly-poc.herokuapp.com"

  constructor(private http: HttpClient) { }

  speak(data: any) {
    return this.http.post(this.url +
      "/speak", data, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    })
  }
}
