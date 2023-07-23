import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServerErrorComponent } from '@components/modals/server-error/server-error.component';
import { CONSTANTS, ENDPOINT } from '@constants/app.constants';
import { Travel, Traveler, TravelerType } from '@models/traveler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelerService {
  constructor(
    private readonly http: HttpClient,
    private readonly dialog: MatDialog
  ) {}

  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.DOCUMENT_TYPE}`
    );
  }

  getAllTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${CONSTANTS.URL_BASE}/${ENDPOINT.TRAVEL}`);
  }

  getAllTravelerType(): Observable<TravelerType[]> {
    return this.http.get<TravelerType[]>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.TRAVELER_TYPE}`
    );
  }

  saveTraveler(traveler: Traveler): Observable<Traveler> {
    return this.http.post<Traveler>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.TRAVELER}`,
      traveler
    );
  }

  getAllTravelers(): Observable<Traveler[]> {
    return this.http.get<Traveler[]>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.TRAVELER}`
    );
  }

  showServerError(): void {
    this.dialog.open(ServerErrorComponent);
  }
}
