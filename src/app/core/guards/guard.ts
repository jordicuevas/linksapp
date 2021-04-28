import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class ProtectionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (!localStorage.getItem('token')) {
      console.log('No estás logueado');
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    return true;
  }
}
