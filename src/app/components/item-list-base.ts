/**
 * Oggetto Base ereditato dagli altri
 */
export class ItemListBase {
  /**
   * Numero totale dei record proveniente dalle api
   *
   * @type {number}
   * @memberof ItemListBase
   */
  public totalRecords: number;
  /**
   *Variabile di caricamento
   *
   * @memberof ItemListBase
   */
  public loading = true;
  /**
   *Pagina corrente
   *
   * @memberof ItemListBase
   */
  public currentPage = 1;

  /**
   *Campi custom da visualizzare
   *
   * @memberof ItemListBase
   */
  public customFields;

  public modalItem;
  public displayModalDetail = false;
  public modalType: string;

  /**
   *Reseta la modal sull'evento di chiusura dello stesso
   *
   * @param {Event} Event
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
   */
  public displayModalPannel(item: any, type: string) {
    this.displayModalDetail = true;
    this.modalItem = item;
    this.modalType = type;
  }
}
