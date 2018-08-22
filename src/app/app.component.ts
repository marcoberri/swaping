import { Component } from '@angular/core';

import { environment } from '../environments/environment';
/**
 *
 * Componente Base
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Versione presa dall'environment
   *
   * @memberof AppComponent
   */
  public version = environment.version;
}
