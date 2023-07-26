import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServerErrorComponent } from '@components/modals/server-error/server-error.component';
import { CONSTANTS, ENDPOINT } from '@constants/app.constants';
import {
  Method,
  Payment,
  Travel,
  Traveler,
  TravelerType,
} from '@models/traveler';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelerService {
  travelerReload$ = new BehaviorSubject<boolean>(true);
  constructor(
    private readonly http: HttpClient,
    private readonly dialog: MatDialog
  ) {}

  getTravelerReload$(): Observable<boolean> {
    return this.travelerReload$.asObservable();
  }

  setTravelerReload(): void {
    this.travelerReload$.next(true);
  }

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

  savePayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.PAYMENT}`,
      payment
    );
  }

  getAllMethods(): Observable<Method[]> {
    return this.http.get<Method[]>(`${CONSTANTS.URL_BASE}/${ENDPOINT.METHOD}`);
  }

  deletePayment(uuid: string): Observable<any> {
    return this.http.delete(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.PAYMENT}/${uuid}`
    );
  }

  deleteTraveler(uuid: string): Observable<any> {
    return this.http.delete(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.TRAVELER}/${uuid}`
    );
  }


  showServerError(): void {
    this.dialog.open(ServerErrorComponent);
  }
}
