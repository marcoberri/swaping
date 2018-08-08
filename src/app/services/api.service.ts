import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { Page } from '../models/page.model';
import { Starship } from '../models/starship.model';
import { Film } from '../models/film.model';
import { Specie } from '../models/specie.model';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  /**
 * Base PATH API
 *
 * @private
 * @memberof ApiService
 */
  private BASE_PATH = 'https://swapi.co/api/';

  constructor(private httpClient: HttpClient) { }

  public getUrl(url: string = null): Promise<any> {
    return this.httpClient.get<any>(this.BASE_PATH + (url ? url : '')).toPromise();
  }

  /**
   * Get People List
   *
   * @returns {Promise<People>}
   * @memberof ApiService
   */
  public getUrlPeople(page: number = 1): Promise<Page<People>> {
    return this.httpClient.get<Page<People>>(this.BASE_PATH + 'people' + '?page=' + page).toPromise();
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
}
