import { Component, Input, OnInit } from '@angular/core';
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
export class TravelerCardComponent implements OnInit {
  @Input() traveler!: Traveler;
  amount = 0;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.calculateAmount();
  }

  calculateAmount(): void {
    console.log(this.traveler);
    try {
      this.traveler.payments.forEach((e) => {
        console.log(e);

        this.amount += e.amount;
      });
    } catch (error) {
      this.amount = 0;
    }
  }

  showModalPayments(): void {
    this.dialog.open(AddPaymentComponent, { data: this.traveler });
  }
}
