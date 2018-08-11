import { Base } from './base.model';
import { Film } from './film.model';
import { People } from './people.model';
export class Planet extends Base {
  name: string;
  climate: string;
  diameter: string;
  films: string;
  filmsObj: Film[];
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string;
  residentsObj: People[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

export const PlanetFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Climate',
    field: 'climate'
  },

  {
    label: 'Diameter',
    field: 'diameter'
  }
];
