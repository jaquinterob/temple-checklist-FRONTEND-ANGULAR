import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const modules = [
  MatProgressBarModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
