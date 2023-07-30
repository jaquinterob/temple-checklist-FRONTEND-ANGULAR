import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MenuComponent } from 'src/app/menu/menu.component';
import { TravelerService } from '@services/traveler.service';
import { Traveler } from '@models/traveler';
import { TravelerCardComponent } from '@components/traveler-card/traveler-card.component';
import { Search } from '@models/search';
import { FilterService } from '@services/filter.service';

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
  travelersForFilter!: Traveler[];
  loader = false;

  searches: Search[] = [
    {
      value: 'all',
      name: 'Todos los travelers',
    },
    {
      value: 'some-payment',
      name: 'Travelers con pagos',
    },
    {
      value: 'no-payments',
      name: 'Travelers sin pagos',
    },
    {
      value: 'young-men',
      name: 'Hombres Jóvenes',
    },
    {
      value: 'young-women',
      name: 'Mujeres Jóvenes',
    },
    {
      value: 'adults',
      name: 'Adultos',
    },
  ];

  constructor(
    private readonly travelerService: TravelerService,
    private readonly filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.getAllTravelers();
    this.getTravelerReload();
  }

  getAllTravelers(): void {
    this.loader = true;
    this.travelerService.getAllTravelers().subscribe({
      next: (travelers: Traveler[]) => {
        setTimeout(() => {
          this.travelers = travelers;
          this.travelersForFilter = this.travelers;
          this.loader = false;
        }, 2000);
      },
    });
  }

  getTravelerReload(): void {
    this.travelerService.getTravelerReload$().subscribe({
      next: () => {
        this.getAllTravelers();
      },
    });
  }

  onChangeFilter(value: string): void {
    this.travelersForFilter = this.filterService.filtering(
      this.travelers,
      value
    );
  }
}
