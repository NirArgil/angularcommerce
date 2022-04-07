import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
// import { ProductPageComponent } from './m1/product-page/product-page.component';
// import { ProductsComponent } from './m1/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { 
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
      // canActivate: [AuthGuard],
      
  },
  // { component: ProductPageComponent,
  //   path: 'product/:id',
  // },
  // {
    // path: 'cart',
    // loadChildren: () =>
    //   import('./m1/cart/cart.module').then((m) => m.CartModule),
    //   canActivate: [AuthGuard],
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
