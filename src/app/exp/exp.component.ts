import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { ExperienceService } from '../services/experiences/experience.service';



@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {


  public expForm: FormGroup;

  private expData: any;
  constructor(  private formBuilder: FormBuilder,  private experienceService: ExperienceService
, public dialogRef: MatDialogRef<ExpComponent>
    ) { }

  ngOnInit(): void {

    console.log('here');
    this.expForm = this.formBuilder.group({
      'Title': [ '', [
        Validators.required,
      ]],
      'Description': [ '', [
        Validators.required,
      ]],
  
      'ExperienceType': [ '', [
        Validators.required
      ]],
      'StartDate': [ '', [
      ]],
      'EndDate': [ '', [
      ]],


  })
}



addExp(){
var  Experience : number = this.expForm.get('ExperienceType').value == "1" ? 1 : 0;
  this.expData=
  {
    "Title":this.expForm.get('Title').value,
    "Description": this.expForm.get('Description').value,
    "ExperienceType": Experience,
    "StartDate": this.expForm.get('StartDate').value,
    "EndDate": this.expForm.get('EndDate').value
}
console.log(this.expForm.get('ExperienceType'));
  this.experienceService.addExperiences(this.expData).subscribe((result : any)=> {
     this.dialogRef.close(result);
  });
}

}
