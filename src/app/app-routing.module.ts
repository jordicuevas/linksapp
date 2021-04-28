import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectionGuard } from './core/guards/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./dashboard/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [ProtectionGuard],
    loadChildren: () =>
      import('./dashboard/layout/app-base/base/base.module').then(
        (mod) => mod.BaseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
