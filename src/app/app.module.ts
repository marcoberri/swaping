import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime ng
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { TabMenuModule } from 'primeng/tabmenu';

// Componeti del mio progetto
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemListPeopleComponent } from './components/item-list-people/item-list-people.component';
import { ItemListPlanetComponent } from './components/item-list-planet/item-list-planet.component';
import { ItemListFilmComponent } from './components/item-list-film/item-list-film.component';
import { ItemListSpecieComponent } from './components/item-list-specie/item-list-specie.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListVehicleComponent } from './components/item-list-vehicle/item-list-vehicle.component';
import { ItemListStarshipComponent } from './components/item-list-starship/item-list-starship.component';

// Principale
import { AppComponent } from './app.component';

// Routing
import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemListPeopleComponent,
    ItemListFilmComponent,
    ItemListPlanetComponent,
    ItemListSpecieComponent,
    ItemListVehicleComponent,
    ItemListStarshipComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // PrimeNG
    ButtonModule,
    TableModule,
    DialogModule,
    TooltipModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
