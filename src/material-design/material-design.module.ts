// src/material-design/material-design.module.ts
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'







const modules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  CdkStepperModule,
  MatStepperModule,
  MatInputModule,
  MatAutocompleteModule,
  FormsModule,
  ReactiveFormsModule
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule {}