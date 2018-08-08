import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListPeopleComponent } from './components/item-list-people/item-list-people.component';

/**
 * Rotte di navigazione
 */
const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: 'list/people', component: ItemListPeopleComponent },
  { path: 'list/:id', component: ItemListComponent },
  { path: 'details/:type/:id', component: ItemDetailsComponent }
  // { path: '', redirectTo: '/', pathMatch: 'full' }
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes,
  { /*enableTracing: true,*/ onSameUrlNavigation: 'reload' });
