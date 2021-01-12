import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Costumer } from '../costumer';
import { CostumerService } from '../costumer.service';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.css']
})
export class UpdateCostumerComponent implements OnInit {

  company_document_number: string;
  costumer: Costumer = new Costumer();

  constructor(private costumerService: CostumerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.company_document_number = this.route.snapshot.params['company_document_number'];
    this.costumerService.getCostumerByDocumentNumber(this.company_document_number).subscribe(data => {
      this.costumer = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.costumerService.updateCostumer(this.company_document_number, this.costumer).subscribe(data => {
      this.goToCostumerList();
    }, error => console.log(error));
  }

  goToCostumerList() {
    this.router.navigate(['/costumers']);
  }

}
