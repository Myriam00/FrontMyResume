import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SkillsService } from '../services/skills/skills.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {


  Name: string;
  Rating: Float32Array;
  SkillObj : any = null;

  constructor( private skillService: SkillsService,
               public dialogRef: MatDialogRef<SkillComponent>,
    ) {}

  ngOnInit() {

  }

  AddSkill() {
    this.SkillObj = {
      Name : this.Name,
     Rating: this.Rating
    }
    this.skillService.addSkill(this.SkillObj).subscribe((result:any)=>{
      this.dialogRef.close(this.SkillObj);
    });
  }

}
