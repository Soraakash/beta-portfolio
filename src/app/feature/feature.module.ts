import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    NgxTypedJsModule,
    FormsModule
  ]
})
export class FeatureModule { }
