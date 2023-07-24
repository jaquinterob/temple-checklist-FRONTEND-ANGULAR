import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Traveler } from '@models/traveler';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from '@components/modals/add-payment/add-payment.component';

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
    this.dialog.open(AddPaymentComponent,{data:this.traveler});
  }
}
