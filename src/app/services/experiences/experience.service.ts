import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experienceUrl = 'https://localhost:44384/api/Experiences';
  constructor(private http: HttpClient) {

    }
    getExperiences() {
      return this.http.get(this.experienceUrl );
   }
   
  addExperiences(exp: any) {
    return this.http.post(this.experienceUrl, exp);
  }

  deleteExperience(id :any) {
    return this.http.delete(this.experienceUrl + '/' + id);
  }
}
