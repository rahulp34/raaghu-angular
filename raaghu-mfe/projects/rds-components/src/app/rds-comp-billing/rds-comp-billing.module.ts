import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompBillingComponent } from './rds-comp-billing.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsInputModule, RdsCardModule, RdsLabelModule, RdsButtonModule, RdsRadioButtonModule } from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'



@NgModule({
  declarations: [
    RdsCompBillingComponent
  ],
  exports: [
    RdsCompBillingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCardModule,
    RdsIconModule,
    RdsLabelModule,
    RdsButtonModule,
    RdsCompDataTableModule,
    RdsRadioButtonModule,
    RdsInputModule
  ]
})
export class RdsCompBillingModule { }
