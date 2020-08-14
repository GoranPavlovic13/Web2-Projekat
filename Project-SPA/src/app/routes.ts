import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register/register.component';
import { LoginComponent } from './user/login/login.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];