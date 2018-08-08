import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemListElement } from '../../models';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public loadData: any[];
  public cols: any[] = [];
  public totalRecords: number;
  public pageType: string;
  public loading = false;

  /**
   *Aggancio un observer ai paramtri ricevuti in path, ogni volta che cambiano effettuo un caricamento diverso per la prima pagina almeno
   * @param {ApiService} apiService
   * @param {ActivatedRoute} route
   * @memberof ItemListComponent
   */
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.cols = [];
      this.loadData = [];
      this.pageType = this.route.snapshot.paramMap.get('id');
      console.log(this.pageType);
      this.loadData = null;
    });
  }

  /**
   *Caricamento e configurazione tabella principale
   *
   * @private
   * @memberof ItemListComponent
   */
  private loadDataAndConfigureTable(event: LazyLoadEvent) {
    console.log('-----');
    console.log(event);
    console.log('-----');
    const currentPage = event.first / event.rows + 1;
    console.log(currentPage);
    this.loading = true;
    this.apiService.getUrl(`${this.pageType}`).then(data => {
      this.loadData = data['results'];
      const keys: string[] = Object.keys(this.loadData[0]);
      this.totalRecords = data.count;
      this.cols = [];
      keys.forEach(k => {
        if (k !== 'created' && k !== 'edited' && k !== 'url') {
          let isArray = false;
          if (
            k === 'films' ||
            k === 'pilots' ||
            k === 'species' ||
            k === 'homeworld' ||
            k === 'vehicles' ||
            k === 'starships' ||
            k === 'residents' ||
            k === 'characters' ||
            k === 'planets' ||
            k === 'people'
          ) {
            isArray = true;
          }

          this.cols.push({ field: k, header: k, isArray: isArray });
        }
      });
      this.loading = false;
    });
  }
}
