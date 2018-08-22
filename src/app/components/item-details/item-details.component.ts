import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StartShipFields } from '../../models/starship.model';
import { VehicleFields } from '../../models/vehicle.model';
import { PlanetFields } from '../../models/planet.model';
import { FilmFields } from '../../models/film.model';
import { PeopleFields } from '../../models/people.model';
import { SpecieFields } from '../../models/specie.model';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  /**
   * Campi da visualizzare nella modal provenienti dalla configurazione
   * del singolo oggetto
   *
   * @memberof ItemDetailsComponent
   */
  public customFields;

  /**
   * Evento mappato in caso di chiusura del dettaglio
   *
   * @type {EventEmitter<any>}
   * @memberof ItemDetailsComponent
   */
  @Output()
  // tslint:disable-next-line:no-output-on-prefix
  public onChiudi: EventEmitter<any> = new EventEmitter();

  /**
   *Parametro in ingresso per visualizzare la modal al click
   *
   * @memberof ItemDetailsComponent
   */
  @Input()
  public displayModal;

  /**
   *Oggetto da visualizzare nella modal
   *
   * @memberof ItemDetailsComponent
   */
  @Input()
  public modalItem;

  /**
   *Setter per la tipologia di oggetto in ingresso
   *
   * @memberof ItemDetailsComponent
   */
  @Input()
  set objecttype(value: string) {
    if (!value) {
      return;
    }
    switch (value) {
      case 'starship':
        this.customFields = StartShipFields;
        break;
      case 'veichle':
        this.customFields = VehicleFields;
        break;
      case 'film':
        this.customFields = FilmFields;
        break;
      case 'people':
        this.customFields = PeopleFields;
        break;
      case 'planet':
        this.customFields = PlanetFields;
        break;
      case 'specie':
        this.customFields = SpecieFields;
        break;
      default:
        console.log('Spiacenti, non abbiamo ' + value);
    }
    this.displayModal = true;
  }
  /**
   *Setting del tipo di ogetto passato per identificare i campi necessari per la visualizzazione
   *
   * @readonly
   * @type {string}
   * @memberof ItemDetailsComponent
   */
  get objecttype(): string {
    // transform value for display
    return 'null';
  }

  /**
   * Creates an instance of ItemDetailsComponent.
   * @param {ApiService} apiService
   * @param {ActivatedRoute} route
   * @memberof ItemDetailsComponent
   */
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  /**
   *Reset dei dati sulla chiusura della modal
   *
   * @param {Event} event
   * @memberof ItemDetailsComponent
   */
  public onHideModal(event: Event) {
    this.displayModal = false;
    this.modalItem = null;
    this.onChiudi.emit(null);
  }
}
