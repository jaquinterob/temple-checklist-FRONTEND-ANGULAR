import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateTravelerComponent } from '@components/modals/create-traveler/create-traveler.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private readonly dialog: MatDialog) {}
  openCreateTravelerModal(): void {
    const dialogRef = this.dialog.open(CreateTravelerComponent);
    dialogRef.afterClosed().subscribe({
      next: () => {
        //something
      },
    });
  }
}
