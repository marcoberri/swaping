import { Base } from './base.model';
/**
 * Classe Base che viene estesa per i veicoli e le navi
 */
export class Macchine extends Base {
  /**
   * Identificativo
   */
  name: string;
  /**
   * Modelli
   */
  model: string;
  /**
   * Numero di passegger
   */
  passengers: string;
  /**
   * Costo in crediti
   */
  cost_in_credits: string;
  /**
   * Equipaggio
   */
  crew: string;
  /**
   * Massima velocità in atmosfera
   */
  max_atmosphering_speed: string;
  /**
   * Dimensione
   */
  length: string;
  /**
   * Prodotto
   */
  manufacturer: string;
  /**
   * Capacità di carico
   */
  cargo_capacity: string;
}
