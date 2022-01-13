import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './first-section/first-section.component';



@NgModule({
  declarations: [
    FirstSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FirstSectionComponent
  ]
})
export class FirstSectionModule { }
