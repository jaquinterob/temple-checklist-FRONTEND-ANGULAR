import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTS, ENDPOINT, ROUTES } from '../constants/app.constants';
import { User } from '../models/user';
import { DocumentType } from '@models/traveler';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly http: HttpClient
  ) {}

  login(user: User): Observable<any> {
    return this.http.post(`${CONSTANTS.URL_BASE}/user/${ROUTES.LOGIN}`, user);
  }

  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(
      `${CONSTANTS.URL_BASE}/${ENDPOINT.DOCUMENT_TYPE}`
    );
  }
}
