import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';



@NgModule({
  declarations: [CompletedTasksComponent], //automatically declares the completed tasks component
  imports: [
    CommonModule
  ],
  exports: [
    CompletedTasksComponent
  ]
})
export class TodoModule { }
