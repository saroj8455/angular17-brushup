import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  // Wildcard route to handle 404
  {
    path: '**',
    component: ErrorComponent,
  },
];
