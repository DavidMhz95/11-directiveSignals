import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomLabelDirective } from './directives/customLabel.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [CustomLabelDirective],
  exports: [CustomLabelDirective]
})
export class SharedModule { }
