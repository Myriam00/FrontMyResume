import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  private myProfileUrl = 'https://localhost:44384/api/MyProfile';
  constructor(private http: HttpClient) { }

  getMyProfile() {
    return this.http.get(this.myProfileUrl );
 }
}
