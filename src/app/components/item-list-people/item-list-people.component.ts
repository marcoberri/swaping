import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { People } from '../../models/people.model';

import { StartShipFields } from '../../models/starship.model';
import { VehicleFields } from '../../models/vehicle.model';
import { FilmFields } from '../../models/film.model';

@Component({
  selector: 'app-item-list-people',
  templateUrl: './item-list-people.component.html',
  styleUrls: ['./item-list-people.component.css']
})
export class ItemListPeopleComponent implements OnInit {
  public loadData: People[];

  public totalRecords: number;
  public loading = true;
  public currentPage = 1;

  public customFields;

  public modalItem;

  public displayModal = false;

  /**
   *Aggancio un observer ai paramtri ricevuti in path, ogni volta che cambiano effettuo un caricamento diverso per la prima pagina almeno
   * @param {ApiService} apiService
   * @param {ActivatedRoute} route
   * @memberof ItemListComponent
   */
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {}

  /**
   *Caricamento e configurazione tabella principale
   *
   * @private
   * @memberof ItemListComponent
   */
  private loadDataAndConfigureTable(event: LazyLoadEvent) {
    this.currentPage = event.first / event.rows;
    if (this.currentPage === 0) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.loading = true;
    this.apiService.getUrlPeople(this.currentPage).then(data => {
      data.results.forEach(item => {
        this.addLookUpList(item.starships, (item.starshipsObj = []));
        this.addLookUpList(item.films, (item.filmsObj = []));
        this.addLookUpList(item.species, (item.speciesObj = []));
        this.addLookUpList(item.vehicles, (item.vehiclesObj = []));

        item.homeworldObj = this.addLooktUp(item.homeworld);
      });

      this.loadData = data.results;

      this.totalRecords = data.count;
      this.loading = false;
    });
  }

  public displayModalPannel(item: any, type: string) {
    this.displayModal = true;
    this.modalItem = item;
    if (type == 'starship') this.customFields = StartShipFields;
    if (type == 'veichle') this.customFields = VehicleFields;
    if (type == 'film') this.customFields = FilmFields;
  }

  /**
   * Verifica la presenza del dato nel session storage, se non presente esegue la chiamata alle api.
   *
   * @private
   * @param {any[]} itemArray
   * @param {any[]} itemTarget
   * @memberof ItemListPeopleComponent
   */
  private addLookUpList(itemArray: any[], itemTarget: any[]) {
    itemArray.forEach(url => {
      if (sessionStorage.getItem(url)) {
        itemTarget.push(JSON.parse(sessionStorage.getItem(url)));
      } else {
        this.apiService.getUrlDetail(url).then(result => {
          itemTarget.push(result);
          sessionStorage.setItem(url, JSON.stringify(result));
        });
      }
    });
  }

  /**
   * Verifica la presenza di un singolo valore in session storage, se non esiste esegue la chiamata
   *
   * @private
   * @param {string} url
   * @param {*} itemTarget
   * @memberof ItemListPeopleComponent
   */
  private addLooktUp(url: string): any {
    if (sessionStorage.getItem(url)) {
      return JSON.parse(sessionStorage.getItem(url));
    } else {
      this.apiService.getUrlDetail(url).then(result => {
        sessionStorage.setItem(url, JSON.stringify(result));
        return result;
      });
    }
  }
}
