import { Base } from './base.model';
import { Planet } from './planet.model';
import { People } from './people.model';
import { Film } from './film.model';

export class Specie extends Base {
  name: string;

  average_height: string;
  average_lifespan: string;
  classification: string;

  designation: string;
  eye_colors: string;
  hair_colors: string;

  homeworld: string;
  homeworlObj: Planet;

  language: string;

  people: string;
  peoplesObj: People[];

  films: string;
  filmsObj: Film[];
  skin_colors: string;
}

export const SpecieFields = [{ label: 'Name', field: 'name' }];
