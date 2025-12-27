import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { MainLayout } from './components/layouts/main-layout/main-layout';
import { AuthLayout } from './components/layouts/auth-layout/auth-layout';
import { SittersComponent } from './components/sitters-component/sitters-component';
import { NewBookingComponent } from './components/bookings/new-booking-component/new-booking-component';


export const routes: Routes = [
    {   path: '', 
        component: MainLayout,
        children: [
        {path:'', component: HomeComponent},
        {path:'sitters', component: SittersComponent},
        {path: 'bookings/new', component: NewBookingComponent }
        ]
    },
    {
        path: '',
        component: AuthLayout,
        children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register }
    ]
  }
];
