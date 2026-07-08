import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../auth/auth-service/auth';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);
  const token = auth.getUserToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
