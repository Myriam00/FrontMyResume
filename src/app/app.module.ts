import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider'
import {MatStepperModule} from '@angular/material/stepper'
import {MatTableModule} from '@angular/material/table'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {MatChipsModule} from '@angular/material/chips'
import {MatDialogModule} from '@angular/material/dialog'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import { BarRatingModule } from "ngx-bar-rating";
import { SkillComponent } from './skill/skill.component';
import { ExpComponent } from './exp/exp.component';
import { MatFormField } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule, MatOption, MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillComponent,
    ExpComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatDividerModule,
   MatMenuModule,
   MatChipsModule,
   MatIconModule,
   MatInputModule,
   MatCardModule,
   MatStepperModule,
   MatListModule,
   MatTableModule,
   MatTabsModule,
   BarRatingModule,
   MatDialogModule,
   MatDatepickerModule,
   MatNativeDateModule ,
   MatOptionModule,
   BrowserAnimationsModule,
   MatPseudoCheckboxModule,
   MatRadioModule,
   LayoutModule,
   MatToolbarModule,
   MatSidenavModule,
   MatToolbarModule,
   MatSidenavModule,
   HttpClientModule
  ],
  providers: [MatDatepickerModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
