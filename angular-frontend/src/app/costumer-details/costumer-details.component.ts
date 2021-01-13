import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Costumer } from '../costumer';
import { CostumerService } from '../costumer.service';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.css']
})
export class CostumerDetailsComponent implements OnInit {

  company_document_number: string;
  costumer: Costumer;

  constructor(private route: ActivatedRoute,
    private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.company_document_number = this.route.snapshot.params['company_document_number'];

    this.costumerService.getCostumerByDocumentNumber(this.company_document_number).subscribe(data => {
     this.costumer = data;
    });
  }

}
