import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';
import { TodoModule } from './todo/todo.module';
import { DataBindingTutorialSectionComponent } from './data-binding-tutorial-section/data-binding-tutorial-section.component';
import { NgStyleAndNgClassTutorialComponent } from './ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component';
import { NgForTutorialComponent } from './ng-for-tutorial/ng-for-tutorial.component';
import { SwitchCaseTutorialComponent } from './switch-case-tutorial/switch-case-tutorial.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesTutorialComponent } from './pipes-tutorial/pipes-tutorial.component';
import { NgIfTutorialComponent } from './ng-if-tutorial/ng-if-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    AuthorizeComponent,
    LoginComponent,
    DataBindingTutorialSectionComponent,
    NgStyleAndNgClassTutorialComponent,
    NgForTutorialComponent,
    SwitchCaseTutorialComponent,
    TwoWayDataBindingComponent,
    PipesTutorialComponent,
    NgIfTutorialComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
