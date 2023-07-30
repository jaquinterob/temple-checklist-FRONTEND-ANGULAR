import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Payment } from '@models/traveler';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { TravelerService } from '@services/traveler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input() payment!: Payment;

  constructor(
    private readonly travelerService: TravelerService,
    private readonly dialog: MatDialog,
    private readonly snack: MatSnackBar
  ) {}

  deletePayment(uuid: string): void {
    this.travelerService.deletePayment(uuid).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.travelerService.setTravelerReload();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error en la petición:', error.message);
        console.error('HTTP status:', error.status);
        this.travelerService.showServerError();
      },
    });
  }
}
