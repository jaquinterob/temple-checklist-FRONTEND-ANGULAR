import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TravelerService } from '@services/traveler.service';
import { Method, Payment, Traveler } from '@models/traveler';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    PaymentComponent,
  ],
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],
})
export class AddPaymentComponent implements OnInit {
  form!: FormGroup;
  payments: Payment[] = [];
  methods: Method[] = [];
  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public traveler: Traveler,
    private readonly travelerService: TravelerService,
    private readonly dialog: MatDialog
  ) {
    this.initForm();
    this.payments = traveler.payments;
  }

  ngOnInit(): void {
    this.getAllMethods();
  }

  initForm(): void {
    this.form = this.fb.group({
      date: [new Date(), [Validators.required]],
      amount: ['', [Validators.required]],
      travelerId: [this.traveler.uuid, [Validators.required]],
      methodId: ['', [Validators.required]],
    });
  }
  addPayment(): void {
    this.travelerService.savePayment(this.form.value).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.travelerService.setTravelerReload();
      },
      error: (error: any) => {
        this.travelerService.showServerError();
      },
    });
  }

  getAllMethods(): void {
    this.travelerService.getAllMethods().subscribe({
      next: (methods: Method[]) => {
        this.methods = methods;
      },
      error: (error: any) => {
        console.error(error);
        this.travelerService.showServerError();
      },
    });
  }

  totalPaymentCalculator(): number {
    let add = 0;
    this.payments.forEach((e) => (add += e.amount));
    return add;
  }
}
