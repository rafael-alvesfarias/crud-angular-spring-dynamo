import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostumerDetailsComponent } from './costumer-details/costumer-details.component';
import { CostumerListComponent } from './costumer-list/costumer-list.component';
import { CreateCostumerComponent } from './create-costumer/create-costumer.component';
import { UpdateCostumerComponent } from './update-costumer/update-costumer.component';


const routes: Routes = [
  { path: 'costumers', component: CostumerListComponent},
  { path: 'create-costumer', component: CreateCostumerComponent},
  { path: 'update-costumer/:company_document_number', component: UpdateCostumerComponent},
  { path: '', redirectTo: 'costumers', pathMatch: 'full'},
  { path: 'costumer-details/:company_document_number', component: CostumerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
