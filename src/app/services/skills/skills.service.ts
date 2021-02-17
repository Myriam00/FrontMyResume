import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


  private skillsUrl = 'https://localhost:44384/api/Skills';

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get(this.skillsUrl );
  }


  addSkill(skill: any) {
    return this.http.post(this.skillsUrl, skill);
  }

  deleteSkill(id :any) {
    return this.http.delete(this.skillsUrl + '/' + id);
  }

}
