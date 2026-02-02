import { CanActivateFn } from '@angular/router';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return () => {
    const role = localStorage.getItem('role');
    return role !== null && allowedRoles.includes(role);
  };
};
