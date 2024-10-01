import { Routes } from '@angular/router';
import { AddemployeesComponent } from './pages/addemployees/addemployees.component';
import { ViewemployeesComponent } from './pages/viewemployees/viewemployees.component';
import { HeroComponent } from './hero/hero.component';


export const routes: Routes = [
    { path:'',component:HeroComponent },
    { path: 'addemployees', component: AddemployeesComponent },
    { path: 'viewemployees', component: ViewemployeesComponent },
  ];