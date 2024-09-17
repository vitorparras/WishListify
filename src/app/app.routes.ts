import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]  },
];
