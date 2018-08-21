import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

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
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  /**
   * Dati di passaggio utilizzati per il caricamento dei dati in  tabella
   *
   * @type {*}
   * @memberof DashboardComponent
   */
  public loadData: any;

  /**
   * Chiavi dell'object utilizzato per generare le colonne della tabella
   *
   * @type {*}
   * @memberof DashboardComponent
   */
  public keys: any;

  /**
   *Inizializza il componente caricando i dati
   *
   * @memberof DashboardComponent
   */
  ngOnInit() {
    this.loadMain();
  }

  /**
   * Evento di click sulla navigazione
   *
   * @param {string} page
   * @memberof DashboardComponent
   */
  public onClickNavigateList(page: string) {
    this.router.navigate([`/list/${page}`]);
  }

  /**
   * Caricamento dati
   *
   * @private
   * @memberof DashboardComponent
   */
  private loadMain() {
    this.apiService.getUrl().then(data => {
      this.loadData = data;
      this.keys = Object.keys(data);
    });
  }
}
