import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Costumer } from '../costumer';
import { CostumerService } from '../costumer.service';

@Component({
  selector: 'app-create-costumer',
  templateUrl: './create-costumer.component.html',
  styleUrls: ['./create-costumer.component.css']
})
export class CreateCostumerComponent implements OnInit {

  costumer: Costumer = new Costumer();
  constructor(private costumerService: CostumerService,
    private router: Router) { }

  ngOnInit(): void {

  }

  saveCostumer() {
    this.costumerService.createCostumer(this.costumer).subscribe(data=>{
      console.log(data);
      this.goToCostumerList();
    },
    error => {
      console.log(error);
    });
  }

  goToCostumerList() {
    this.router.navigate(['/costumers']);
  }

  onSubmit() {
    console.log(this.costumer);
    this.saveCostumer();
  }

}
