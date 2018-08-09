import { Base } from './base.model';
export class Starship extends Base {
  name: string;
  model: string;
  starship_class: string;
  passengers: string;
  cargo_capacity: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
}

export const StartShipFields = [
  {
    label: 'Name',
    field: 'name'
  },

  {
    label: 'Cargo Capacity',
    field: 'cargo_capacity'
  },

  {
    label: 'Consumables',
    field: 'consumables'
  },

  {
    label: 'Cost in Credits',
    field: 'cost_in_credits'
  },

  {
    label: 'Crew',
    field: 'crew'
  },
  {
    label: 'Hyperdrive rating',
    field: 'hyperdrive_rating'
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
    label: 'Max Atmosphering Speed',
    field: 'max_atmosphering_speed'
  },
  {
    label: 'model',
    field: 'model'
  },
  {
    label: 'Passengers',
    field: 'passengers'
  }
];
