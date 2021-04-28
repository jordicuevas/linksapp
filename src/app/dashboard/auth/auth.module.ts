import { LoginService } from './services/login.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseModule } from '../layout/app-base/base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/sharedModules/angular-material.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService],
})
export class AuthModule {}
