import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: '<p>Página não encontrada. Redirecionando para home...</p>',
})
export class NotFoundComponent {
  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 3000);
    } else {
      setTimeout(() => {
        this.router.navigate(['']);
      }, 3000);
    }
  }
}
