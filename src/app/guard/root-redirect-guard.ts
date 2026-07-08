import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../auth/auth-service/auth';
import { inject } from '@angular/core';

export const rootRedirectGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const token = auth.getUserToken();
  if (!token) {
    return router.parseUrl('/login');
  }
  var role = auth.getUserRole();
  if (role?.has('ADMIN') || role?.has('SUPER_ADMIN') || role?.has('IT_ADMIN')) {
    return router.parseUrl('/admin-dashboard');
  } else {
    return router.parseUrl('/job-list');
  }
};
