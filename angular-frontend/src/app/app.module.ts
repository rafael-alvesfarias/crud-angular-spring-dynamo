import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerListComponent } from './costumer-list/costumer-list.component';
import { CreateCostumerComponent } from './create-costumer/create-costumer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCostumerComponent } from './update-costumer/update-costumer.component';

@NgModule({
  declarations: [
    AppComponent,
    CostumerListComponent,
    CreateCostumerComponent,
    UpdateCostumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
