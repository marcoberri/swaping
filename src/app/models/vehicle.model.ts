import { Film } from './film.model';
import { Macchine } from './macchine.model';
import { People } from './people.model';
/**
 * Oggetto del mapping del veicolo
 */
export class Vehicle extends Macchine {
  consumables: string;
  /**
   * Classe del veicolo
   */
  vehicle_class: string;
  /**
   * mapping dei film url
   */
  films: string;
  /**
   * mapping dei film obj
   */

  filmsObj: Film[];
  /**
   * mapping dei personaggi
   */

  pilots: string;
  /**
   * mapping dei personaggi obj
   */

  pilotsObj: People[];
}

/**
 * Mapping per la gestione delle lookup in visualizzazione su pop-up
 */

export const VehicleFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Cargo Capacity',
    field: 'cargo_capacity'
  },
  {
    label: 'Cost in credits',
    field: 'cost_in_credits'
  },

  {
    label: 'Crew',
    field: 'crew'
  },

  {
    label: 'Consumables',
    field: 'consumables'
  },

  {
    label: 'Length',
    field: 'length'
  },

  {
    label: 'Manufacturer',
    field: 'manufacturer'
  },

  {
    label: 'Maxa atmosphering speed',
    field: 'max_atmosphering_speed'
  },

  {
    label: 'Model',
    field: 'model'
  },

  {
    label: 'Passengers',
    field: 'passengers'
  },
  {
    label: 'Vehicle class',
    field: 'vehicle_class'
  }
];
