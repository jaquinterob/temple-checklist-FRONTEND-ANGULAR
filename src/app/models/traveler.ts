export interface Traveler {
  uuid: string;
  documentTypeId: string;
  document: string;
  travelId: string;
  travelerTypeId: string;
  name: string;
  lastName: string;
  age: number;
  cellPhone: string;
  leader: boolean;
  active: boolean;
  creationDate: Date;
  documentType: DocumentType;
  travel: Travel;
  travelerType: TravelerType;
  payments: Payment[];
}

export interface DocumentType {
  uuid: string;
  name: string;
  description: string;
}

export interface Payment {
  uuid: string;
  date: Date;
  amount: number;
  travelerId: string;
  methodId: string;
  method: Method;
}

export interface Travel {
  uuid: string;
  date: Date;
  places: number;
  temple: string;
}

export interface TravelerType {
  uuid: string;
  name: string;
}

export interface Method {
  uuid: string;
  name: string;
}
