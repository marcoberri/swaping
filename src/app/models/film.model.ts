import { Base } from './base.model';
import { Specie } from './specie.model';
import { Planet } from './planet.model';
import { Vehicle } from './vehicle.model';
import { People } from './people.model';
export class Film extends Base {
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  species: string;
  speciesObj: Specie[];
  characters: string;
  charactersObj: People[];
  planets: string;
  planetsObj: Planet[];
  vehicles: string;
  vehiclesObj: Vehicle[];
}

export const FilmFields = [
  {
    label: 'Title',
    field: 'title'
  },
  {
    label: 'Director',
    field: 'director'
  },
  {
    label: 'Producer',
    field: 'producer'
  },
  {
    label: 'Release date',
    field: 'release_date'
  },

  {
    label: 'Episode',
    field: 'episode_id'
  },

  {
    label: 'Opening Crawl',
    field: 'opening_crawl'
  }
];
