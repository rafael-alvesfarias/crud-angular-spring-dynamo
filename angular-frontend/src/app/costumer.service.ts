import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Costumer } from './costumer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  private baseUrl = "http://localhost:9080/v1/costumers";

  constructor(private httpClient: HttpClient) { }

  getCostumersList(): Observable<Costumer[]> {
    return this.httpClient.get<Costumer[]>(`${this.baseUrl}`);
  }

  createCostumer(costumer: Costumer): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, costumer);
  }

  getCostumerByDocumentNumber(company_document_number: string): Observable<Costumer> {
    return this.httpClient.get<Costumer>(`${this.baseUrl}/${company_document_number}`);
  }

  updateCostumer(company_document_number: string, costumer: Costumer): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${company_document_number}`, costumer);
  }

  deleteCostumer(company_document_number: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${company_document_number}`);
  }
}
