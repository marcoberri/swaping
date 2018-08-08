import { Starship } from './starship.model';
import { Film } from './film.model';
import { Specie } from './specie.model';
import { Homeworld } from './homeworld.model';
import { Base } from './base.model';
import { Vehicle } from './vehicle.model.';

export class People extends Base {
  name: string;
  height: string;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  homeworldObj: Homeworld;
  films: string[];
  filmsObj: Film[];
  species: string[];
  speciesObj: Specie[];
  vehicles: string[];
  vehiclesObj: Vehicle[];
  starships: string[];
  starshipsObj: Starship[];
}
