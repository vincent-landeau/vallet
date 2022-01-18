import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HeroComponent} from "./hero/hero.component";

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeroComponent
  ]
})
export class SharedModule {
}
