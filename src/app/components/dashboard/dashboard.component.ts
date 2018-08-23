import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MenuItem } from 'primeng/api';
/**
 *Gestione della dashboard principale del sito
 *
 * @export
 * @class DashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * Costruttore del metodo DashboardComponent.
   * @param {HttpClient} httpClient
   * @param {Router} router
   * @param {ApiService} apiService
   * @memberof DashboardComponent
   */
  constructor(private router: Router, private apiService: ApiService) {}

  public items: MenuItem[] = [];

  /**
   *Inizializza il componente caricando i dati
   *
   * @memberof DashboardComponent
   */
  ngOnInit() {
    this.loadMain();
  }

  /**
   * Creazione menu superiore
   *
   * @private
   * @memberof DashboardComponent
   */
  private loadMain() {
    this.apiService.getUrl().then(data => {
      Object.keys(data).forEach(element => {
        console.log('ele:' + element);
        if (element) {
          this.items.push({
            label: element,
            routerLink: 'list/' + element
          });
        }
      });
    });
  }
}
