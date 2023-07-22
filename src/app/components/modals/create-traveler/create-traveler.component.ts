import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DocumentType } from '@models/traveler';
import { TravelerService } from '@services/traveler.service';

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
  constructor(
    private readonly fb: FormBuilder,
    private readonly travelerService: TravelerService
  ) {
    this.formInit();
  }

  ngOnInit(): void {
    this.getAllDocumentsType();
  }

  getAllDocumentsType(): void {
    this.travelerService.getAllDocumentType().subscribe({
      next: (documentTypes) => {
        console.log(documentTypes);
        this.documentTypes = documentTypes as unknown as DocumentType[];
      },
      error: (error: any) => console.error(error),
    });
  }

  formInit(): void {
    this.form = this.fb.group({
      documentTypeId: ['', [Validators.required]],
      document: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      cellPhone: [new Date(), [Validators.required]],
      travelId: ['', [Validators.required]],
      travelerTypeId: ['', [Validators.required]],
    });
  }
}
