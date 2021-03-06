import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Costumer } from '../costumer';
import { CostumerService } from '../costumer.service';


@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {

  costumers: Costumer[];
  
  constructor(private costumerService: CostumerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCostumers();
  }

  private getCostumers() {
    this.costumerService.getCostumersList().subscribe(data => {
      this.costumers = data;
    })
  }

  costumerDetails(company_document_number: string) {
    this.router.navigate(['costumer-details', company_document_number]);
  }

  updateCostumer(company_document_number: string) {
    this.router.navigate(['update-costumer', company_document_number]);
  }

  deleteCostumer(company_document_number: string) {
    this.costumerService.deleteCostumer(company_document_number).subscribe(data => {
      console.log(data);
      this.getCostumers();
    });
  }

}
