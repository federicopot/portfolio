import { Routes } from '@angular/router';
import { HomePageComponent } from '../core/components/home-page/home-page.component';
import { PreLoadingComponent } from '../core/components/pre-loading/pre-loading.component';
import { ErrorPageComponent } from '../core/pages/error-page/error-page.component';

export const routes: Routes = [
  {
    path:'',
    component: PreLoadingComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
];
