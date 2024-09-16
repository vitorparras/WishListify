import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home/home.component';
import { IndexComponent } from './modules/index/index/index.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]  },
];
