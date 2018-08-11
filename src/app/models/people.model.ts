import { Starship } from './starship.model';
import { Film } from './film.model';
import { Specie } from './specie.model';
import { Base } from './base.model';
import { Vehicle } from './vehicle.model';
import { Planet } from './planet.model';

export class People extends Base {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  homeworldObj: Planet;
  films: string[];
  filmsObj: Film[];
  species: string[];
  speciesObj: Specie[];
  vehicles: string[];
  vehiclesObj: Vehicle[];
  starships: string[];
  starshipsObj: Starship[];
}
export const PeopleFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Height',
    field: 'height'
  },

  {
    label: 'Mass',
    field: 'mass'
  },
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Hair Color',
    field: 'hair_color'
  },
  {
    label: 'Skin Color',
    field: 'skin_color'
  },
  {
    label: 'Eye Color',
    field: 'eye_color'
  },
  {
    label: 'Birth year',
    field: 'birth_year'
  },
  {
    label: 'Gender',
    field: 'gender'
  }
];
