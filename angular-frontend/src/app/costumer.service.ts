import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Costumer } from './costumer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  private baseUrl = "http://localhost:9080/v1/costumers/";

  constructor(private httpClient: HttpClient) { }

  getCostumersList(): Observable<Costumer[]> {
    return this.httpClient.get<Costumer[]>(`${this.baseUrl}`);
  }
}
