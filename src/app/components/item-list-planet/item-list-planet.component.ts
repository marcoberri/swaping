import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-item-list-planet',
  templateUrl: './item-list-planet.component.html',
  styleUrls: ['./item-list-planet.component.css']
})
export class ItemListPlanetComponent implements OnInit {
  public loadData: Planet[];

  public totalRecords: number;
  public loading = true;
  public currentPage = 1;

  public customFields;

  /**
   *Gestione della modal con le specifiche dell'object
   *
   * @memberof ItemListPlanetComponent
   */
  public modalItem;
  public displayModalDetail = false;
  public modalType: string;
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
   * @public
   * @memberof ItemListComponent
   */
  public loadDataAndConfigureTable(event: LazyLoadEvent) {
    this.currentPage = event.first / event.rows;
    if (this.currentPage === 0) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.loading = true;
    this.apiService.getUrlPages(this.currentPage, 'planets').then(data => {
      data.results.forEach(d => this.apiService.elaborateLookup(d));

      this.loadData = data.results;

      this.totalRecords = data.count;
      this.loading = false;
    });
  }

  /**
   *Reseta la modal sull'evento di chiusura dello stesso
   *
   * @param {Event} Event
   * @memberof ItemListPlanetComponent
   */
  public resetModal(Event: Event) {
    this.displayModalDetail = false;
    this.modalItem = null;
    this.modalType = null;
  }

  /**
   * Visualizza la modale con le info dell'object richiesto
   *
   * @param {*} item
   * @param {string} type
   * @memberof ItemListPlanetComponent
   */
  public displayModalPannel(item: any, type: string) {
    this.displayModalDetail = true;
    this.modalItem = item;
    this.modalType = type;
  }
}
