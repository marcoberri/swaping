import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



// Prime ng
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

// Componeti del mio progetto
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

// Principale
import { AppComponent } from './app.component';


// Routing
import { routingModule } from './app.routing';
import { ItemListPeopleComponent } from './components/item-list-people/item-list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemListComponent,
    ItemListPeopleComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,

    // PrimeNG
    ButtonModule,
    TableModule,
    DialogModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
