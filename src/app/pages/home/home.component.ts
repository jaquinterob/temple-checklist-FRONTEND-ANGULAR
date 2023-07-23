import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MenuComponent } from 'src/app/menu/menu.component';
import { TravelerService } from '@services/traveler.service';
import { Traveler } from '@models/traveler';
import { TravelerCardComponent } from '@components/traveler-card/traveler-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AngularMaterialModule,
    MenuComponent,
    TravelerCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent implements OnInit {
  travelers!: Traveler[];
  constructor(private readonly travelerService: TravelerService) {}
  ngOnInit(): void {
    this.getAllTravelers();
  }
  getAllTravelers(): void {
    this.travelerService.getAllTravelers().subscribe({
      next: (travelers: Traveler[]) => {
        this.travelers = travelers;
      },
    });
  }
}
