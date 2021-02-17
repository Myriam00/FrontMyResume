import { Component, OnInit } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { MatDialog } from '@angular/material/dialog';
import { ExpComponent } from '../exp/exp.component';
import { SkillsService } from '../services/skills/skills.service';
import { ExperienceService } from '../services/experiences/experience.service';
import { MyProfileService } from '../services/myProfile/my-profile.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
 public score: number = 5;
 public skills: any[] = [];
 public experiences: any[] = [];
 public myProfile: any = null ;



  constructor( public dialog: MatDialog,
               private skillService: SkillsService,
               private experienceService: ExperienceService,
               private myProfileService: MyProfileService,
               ) { }

  ngOnInit(): void {
   this.getSkills();
   this.getExp();


   this.myProfileService.getMyProfile().subscribe((myProfile: any)=> {
    this.myProfile=myProfile[0];
   });
  }
  addSkills() {
    const dialogRef = this.dialog.open(SkillComponent).afterClosed().subscribe((result: any)=>{
      this.getSkills();

    });
  }
  addExp() {
    const dialogRef1= this.dialog.open(ExpComponent).afterClosed().subscribe((result: any)=>{
      this.getExp() ;
    });
   
  }

  getSkills() {
    this.skillService.getSkills().subscribe((skills: any[])=> {
      this.skills=skills;
     });
  }

  getExp() {
    this.experienceService.getExperiences().subscribe((experiences: any[])=> {
      this.experiences=experiences;
     });
  }

  deleteSkill(id:number) {
    this.skillService.deleteSkill(id).subscribe((result:any)=>{
        this.getSkills();
    });
  }

  deleteExp(id:number) {
    this.experienceService.deleteExperience(id).subscribe((result:any)=>{
        this.getExp();
    });
  }

}
