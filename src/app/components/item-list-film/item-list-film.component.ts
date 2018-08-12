import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-item-list-film',
  templateUrl: './item-list-film.component.html',
  styleUrls: ['./item-list-film.component.css']
})
export class ItemListFilmComponent implements OnInit {
  public loadData: Film[];

  public totalRecords: number;
  public loading = true;
  public currentPage = 1;

  /**
   * Gestione della modal con le specifiche dell'object
   *
   * @memberof ItemListfilmComponent
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
   * @private
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
    this.apiService.getUrlPages(this.currentPage, 'films').then(data => {
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
