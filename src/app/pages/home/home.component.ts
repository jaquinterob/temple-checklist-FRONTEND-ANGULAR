import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateTravelerComponent } from '@components/modals/create-traveler/create-traveler.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
  constructor(private readonly dialog: MatDialog) {}
  ngOnInit(): void {
    this.openCreateTravelerModal();
  }
  openCreateTravelerModal(): void {
    const dialogRef = this.dialog.open(CreateTravelerComponent);
    dialogRef.afterClosed().subscribe({
      next: () => {
        //something
      },
    });
  }
}
