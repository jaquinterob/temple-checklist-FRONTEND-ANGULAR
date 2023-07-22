import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS, ENDPOINT } from '@constants/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelerService {
  constructor(private readonly http: HttpClient) {}

  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.DOCUMENT_TYPE}`
    );
  }
}
