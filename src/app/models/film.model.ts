import { Base } from './base.model';
export class Film extends Base {
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  //species:string;
  //"characters": People[];
  //"planets": People[];
  /*    "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        ...
    ]*/
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
