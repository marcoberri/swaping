import { Base } from './base.model';
import { Film } from './film.model';

export class Vehicle extends Base {
  name: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  passengers: string;
  vehicle_class: string;
  films: Film[];

  /*    "pilots": [],
    "films": [
        "https://swapi.co/api/films/1/"
    ],
    "url": "https://swapi.co/api/vehicles/4/",
    */
}

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
