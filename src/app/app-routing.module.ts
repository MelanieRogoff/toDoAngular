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

const routes: Routes = [ //DON'T PUT '/' IN THE PATH
  { path: '', redirectTo: 'products', pathMatch: 'full' }, //telling the default page to redirect to products route
  //Lt's say that when the path is admin, use AdminHomeComponent. It can ONLY activate based on info in our AdminGuard. Essentially, whenever the AdminGuardGuard resolves to TRUE, let the user access the admin path and display the AdminHomeComponent. When it's false, DO NOT LET THE USER VIEW THIS DATA. 
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
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
