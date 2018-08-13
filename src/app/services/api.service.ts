import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { Page } from '../models/page.model';
import { Starship } from '../models/starship.model';
import { Film } from '../models/film.model';
import { Specie } from '../models/specie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Base PATH API
   *
   * @private
   * @memberof ApiService
   */
  private BASE_PATH = 'https://swapi.co/api/';

  constructor(private httpClient: HttpClient) {}

  public getUrl(url: string = null): Promise<any> {
    return this.httpClient
      .get<any>(this.BASE_PATH + (url ? url : ''))
      .toPromise();
  }

  /**
   * Get Object paginated list
   *
   * @param {number} [page=1]
   * @param {string} obj
   * @returns {Promise<Page<Any>>}
   * @memberof ApiService
   */
  public getUrlPages(page: number = 1, obj: string): Promise<Page<any>> {
    return this.httpClient
      .get<Page<People>>(this.BASE_PATH + obj + '?page=' + page)
      .toPromise();
  }
  /**
   * Estrare un url per dettaglio utente
   *
   * @param {string} url
   * @returns {Promise<any>}
   * @memberof ApiService
   */
  public getUrlDetail(url: string): Promise<any> {
    return this.httpClient.get<any>(url).toPromise();
  }

  /**
   *
   * Verifica la presenza di un singolo valore in session storage, se non esiste esegue la chiamata
   *
   * @param {string} url
   * @returns {*}
   * @memberof ApiService
   */
  public getLookUp(url: string): any {
    if (sessionStorage.getItem(url)) {
      return JSON.parse(sessionStorage.getItem(url));
    } else {
      this.getUrlDetail(url).then(result => {
        sessionStorage.setItem(url, JSON.stringify(result));
        return result;
      });
    }
  }

  /**
   * Verifica la presenza del dato nel session storage, se non presente esegue la chiamata alle api.
   *
   * @private
   * @param {any[]} itemArray
   * @param {any[]} itemTarget
   */
  public getLookUpList(itemArray: any[], itemTarget: any[]) {
    itemArray.forEach(url => {
      if (sessionStorage.getItem(url)) {
        itemTarget.push(JSON.parse(sessionStorage.getItem(url)));
      } else {
        this.getUrlDetail(url).then(result => {
          itemTarget.push(result);
          sessionStorage.setItem(url, JSON.stringify(result));
        });
      }
    });
  }

  public elaborateLookup(item: any) {
    if (!item) {
      return;
    }

    if (item.starships) {
      this.getLookUpList(item.starships, (item.starshipsObj = []));
    }

    if (item['films']) {
      this.getLookUpList(item.films, (item.filmsObj = []));
    }
    if (item['species']) {
      this.getLookUpList(item.species, (item.speciesObj = []));
    }
    if (item['vehicles']) {
      this.getLookUpList(item.vehicles, (item.vehiclesObj = []));
    }
    if (item['residents']) {
      this.getLookUpList(item.residents, (item.residentsObj = []));
    }

    if (item['planets']) {
      this.getLookUpList(item.planets, (item.planetsObj = []));
    }

    if (item['characters']) {
      this.getLookUpList(item.characters, (item.charatersObj = []));
    }

    if (item['homeworld']) {
      item.homeworldObj = this.getLookUp(item.homeworld);
    }
  }
}
