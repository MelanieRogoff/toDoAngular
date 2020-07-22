import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    AuthorizeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
