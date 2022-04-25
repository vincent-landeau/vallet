import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HeroComponent} from "./hero/hero.component";
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    HeroComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeroComponent,
    PresentationComponent
  ]
})
export class SharedModule {
}
