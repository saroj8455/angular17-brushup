import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/create-product/create-product.component';
import { ProductListComponent } from './pages/dashboard/product-list/product-list.component';
import { VenderComponent } from './pages/dashboard/vender/vender.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'template',
    // component: TemplateFormComponent,
    // standlone component as lazy load
    loadComponent: () =>
      import('./pages/template-form/template-form.component').then(
        (comp) => comp.TemplateFormComponent
      ),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'create', component: CreateProductComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'vender', component: VenderComponent },
    ],
  },
  {
    path: 'profile/:profileId',
    component: ProfileComponent,
  },
  // Wildcard route to handle 404
  {
    path: '**',
    component: ErrorComponent,
  },
];
