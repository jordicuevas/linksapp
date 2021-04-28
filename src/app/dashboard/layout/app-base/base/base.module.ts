import { LinksComponent } from './components/links/links.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { AngularMaterialModule } from './../../../../core/sharedModules/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { BaseRoutingModule } from './base.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinksListComponent } from './components/links-list/links-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    NavbarComponent,
    ProfileComponent,
    LinksComponent,
    LinksListComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BaseModule {}
