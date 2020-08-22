import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsTutorialComponent } from './products-tutorial/products-tutorial.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { SigninComponent } from './signin/signin.component';
import { PipesTutorialComponent } from './pipes-tutorial/pipes-tutorial.component';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe-example.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { DataBindingTutorialSectionComponent } from './data-binding-tutorial-section/data-binding-tutorial-section.component';
import { NgIfTutorialComponent } from './ng-if-tutorial/ng-if-tutorial.component';
import { NgStyleAndNgClassTutorialComponent } from './ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component';
import { NgForTutorialComponent } from './ng-for-tutorial/ng-for-tutorial.component';
import { SwitchCaseTutorialComponent } from './switch-case-tutorial/switch-case-tutorial.component';
import { CheckoutReactiveFormComponent } from './checkout-reactive-form/checkout-reactive-form.component';

const routes: Routes = [ //DON'T PUT '/' IN THE PATH
//telling the default page to redirect to products route
  //Let's say that when the path is admin, use AdminHomeComponent. It can ONLY activate based on info in our AdminGuard. Essentially, whenever the AdminGuardGuard resolves to TRUE, let the user access the admin path and display the AdminHomeComponent. When it's false, DO NOT LET THE USER VIEW THIS DATA. 
  { path: '', redirectTo: 'products', pathMatch: 'full' }, 
  { path: 'signin', component: SigninComponent },
  { path: 'pipes', component: PipesTutorialComponent },
  { path: 'checkout', component: CheckoutReactiveFormComponent },
  { path: 'custompipes', component: CustomPipeExampleComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard] },
  { path: 'products',
    children: [
      { path: 'view', component: ProductViewComponent }, 
      { path: 'edit', component: ProductEditComponent },
      { path: 'view/:id', component: ProductIdComponent }
    ]},
  { path: 'order/:id/:id2', component: OrderViewComponent },//this lets us pass 2 params in
  { path: 'search', component: SearchComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, //imports from the orders.module and then loads this OrdersModule
  { path: '**', component: PageNotFoundComponent },
  { path: 'two', component: TwoWayDataBindingComponent },
  { path: 'if', component: NgIfTutorialComponent },
  { path: 'style', component: NgStyleAndNgClassTutorialComponent },
  { path: 'for', component: NgForTutorialComponent },
  { path: 'switch', component: SwitchCaseTutorialComponent },
  { path: 'databinding', component: DataBindingTutorialSectionComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
