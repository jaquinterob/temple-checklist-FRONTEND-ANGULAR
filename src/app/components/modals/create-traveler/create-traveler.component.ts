import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DocumentType, Travel, Traveler, TravelerType } from '@models/traveler';
import { TravelerService } from '@services/traveler.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-traveler',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  templateUrl: './create-traveler.component.html',
  styleUrls: ['./create-traveler.component.scss'],
})
export class CreateTravelerComponent implements OnInit {
  form!: FormGroup;
  documentTypes!: DocumentType[];
  travels!: Travel[];
  travelerTypes!: TravelerType[];
  constructor(
    private readonly fb: FormBuilder,
    private readonly travelerService: TravelerService,
    private readonly dialog: MatDialog,
    private readonly snack: MatSnackBar
  ) {
    this.formInit();
  }

  ngOnInit(): void {
    this.getAllDocumentsType();
    this.getAllTravels();
    this.getAllTravelerType();
  }

  getAllDocumentsType(): void {
    this.travelerService.getAllDocumentType().subscribe({
      next: (documentTypes) => {
        console.log(documentTypes);
        this.documentTypes = documentTypes as unknown as DocumentType[];
      },
      error: (error: any) => {
        console.error(error);
        this.travelerService.showServerError();
      },
    });
  }

  getAllTravels(): void {
    this.travelerService.getAllTravels().subscribe({
      next: (travels: Travel[]) => {
        this.travels = travels;
      },
      error: (error: any) => {
        console.error(error);
        this.travelerService.showServerError();
      },
    });
  }
  getAllTravelerType(): void {
    this.travelerService.getAllTravelerType().subscribe({
      next: (travels: TravelerType[]) => {
        this.travelerTypes = travels;
      },
      error: (error: any) => {
        console.error(error);
        this.travelerService.showServerError();
      },
    });
  }

  formInit(): void {
    this.form = this.fb.group({
      documentTypeId: ['', [Validators.required]],
      document: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      leader: [false, [Validators.required]],
      creationDate: [new Date(), [Validators.required]],
      cellPhone: ['', [Validators.required]],
      travelId: ['', [Validators.required]],
      travelerTypeId: ['', [Validators.required]],
    });
  }

  saveTraveler(): void {
    this.travelerService.saveTraveler(this.form.value).subscribe({
      next: (traveler: Traveler) => {
        if (traveler) {
          this.dialog.closeAll();
          this.travelerService.setTravelerReload();
          this.snack.open('Traveler guardado satisfactoriamente', 'ok', {
            duration: 4000,
          });
        } else {
          this.snack.open('Error al guardar Traveler', 'ok');
        }
      },
      error: (error: any) => {
        console.error(error);
        this.travelerService.showServerError();
      },
    });
  }

  onChangeAge(age: any): void {
    if (age.value > 17) {
      const idAdult = this.travelerTypes.filter(
        (type) => type.name === 'Adulto'
      )[0];
      this.form.get('travelerTypeId')?.setValue(idAdult.uuid);
    } else {
      this.form.get('travelerTypeId')?.setValue('');
    }
  }
}
