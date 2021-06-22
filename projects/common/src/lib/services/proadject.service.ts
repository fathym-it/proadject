import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProadjectService {
  //  Constructors
  constructor(protected http: HttpClient) {}

  //  API Methods
  public GetUsersSettings() {
    return this.http.get('api/proadject/', {});
  };

  public SetUsersSettings() {
    return this.http.post('api/proadject/', {});
  };
}
