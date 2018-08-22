import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Starship } from '../../models/starship.model';
import { ItemListBase } from '../item-list-base';
/**
 * Gestione elenco delle starship
 *
 * @export
 * @class ItemListStarshipComponent
 * @extends {ItemListBase}
 */
@Component({
  selector: 'app-item-list-starship',
  templateUrl: './item-list-starship.component.html',
  styleUrls: ['./item-list-starship.component.css']
})
export class ItemListStarshipComponent extends ItemListBase {
  /**
   * Oggetti caricati
   *
   * @type {Starship[]}
   * @memberof ItemListStarshipComponent
   */
  public loadData: Starship[];
  /**
   * Url caricamento e titolo della pagina
   *
   * @memberof ItemListStarshipComponent
   */
  public mainUrl = 'starships';
  /**
   *Aggancio un observer ai paramtri ricevuti in path, ogni volta che cambiano effettuo un caricamento diverso per la prima pagina almeno
   * @param {ApiService} apiService
   * @param {ActivatedRoute} route
   * @memberof ItemListComponent
   */
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    super();
  }

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
    this.apiService.getUrlPages(this.currentPage, this.mainUrl).then(data => {
      data.results.forEach(d => this.apiService.elaborateLookup(d));
      this.loadData = data.results;
      this.totalRecords = data.count;
      this.loading = false;
    });
  }
}
