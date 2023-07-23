import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent {}
