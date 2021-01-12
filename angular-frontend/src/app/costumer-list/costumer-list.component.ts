import { Component, OnInit } from '@angular/core';
import { Costumer } from '../costumer';
import { CostumerService } from '../costumer.service';


@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {

  costumers: Costumer[];
  
  constructor(private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.getCostumers();
  }

  private getCostumers() {
    this.costumerService.getCostumersList().subscribe(data => {
      this.costumers = data;
    })
  }

}
