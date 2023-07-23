import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Traveler } from '@models/traveler';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MatDialog } from '@angular/material/dialog';
import { ServerErrorComponent } from '@components/modals/server-error/server-error.component';

@Component({
  selector: 'app-traveler-card',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './traveler-card.component.html',
  styleUrls: ['./traveler-card.component.scss'],
})
export class TravelerCardComponent {
  @Input() traveler!: Traveler;
  constructor(private readonly dialog: MatDialog) {}
  showModalPayments(): void {
    this.dialog.open(ServerErrorComponent)
  }
}
