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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesTutorialComponent } from './pipes-tutorial/pipes-tutorial.component';
import { NgIfTutorialComponent } from './ng-if-tutorial/ng-if-tutorial.component';
import { HighlightPipeTutorialPipe } from './highlight-pipe-tutorial.pipe';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe-example.component';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductsTutorialComponent } from './products-tutorial/products-tutorial.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutReactiveFormComponent } from './checkout-reactive-form/checkout-reactive-form.component';
import { SecondReactiveFormComponent } from './second-reactive-form/second-reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { RemoveRowReactiveFormComponent } from './remove-row-reactive-form/remove-row-reactive-form.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    CustomPipeExampleComponent,
    DataBindingTutorialSectionComponent,
    HighlightPipeTutorialPipe,
    HoverEffectPipe,
    LoginComponent,
    NgIfTutorialComponent,
    NgForTutorialComponent,
    NgStyleAndNgClassTutorialComponent,
    PipesTutorialComponent,
    SwitchCaseTutorialComponent,
    TasksComponent,
    TwoWayDataBindingComponent,
    ProductsTutorialComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    OrderViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminHomeComponent,
    SigninComponent,
    CheckoutReactiveFormComponent,
    SecondReactiveFormComponent,
    FormArrayComponent,
    RemoveRowReactiveFormComponent,
    ObservableComponent,
    ContactsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TodoModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
