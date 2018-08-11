import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListPeopleComponent } from './components/item-list-people/item-list-people.component';
import { ItemListPlanetComponent } from './components/item-list-planet/item-list-planet.component';

/**
 * Rotte di navigazione
 */
const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: 'list/people', component: ItemListPeopleComponent },
  { path: 'list/planets', component: ItemListPlanetComponent }
  // { path: '', redirectTo: '/', pathMatch: 'full' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  /*enableTracing: true,*/ onSameUrlNavigation: 'reload'
});
