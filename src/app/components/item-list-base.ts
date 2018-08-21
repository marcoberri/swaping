export class ItemListBase {
  public totalRecords: number;
  public loading = true;
  public currentPage = 1;

  public customFields;
  public search: string = null;

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

  public searchData(event) {
    console.log('here:' + event);
  }
}
