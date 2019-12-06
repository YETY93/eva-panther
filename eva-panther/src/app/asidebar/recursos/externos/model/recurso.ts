/**
 * @description Clase  que contiene la informacion y los
 * datos de los recursos adicionales para mejorar el aprendizaje
 * 
 * @author Saray Burbano
 */
export interface Recurso{
    
    /**
    * Indicador deL id del recurso a trabajar.
    */
    id: number;
    
    /**
    * Indicador del nombre recurso a trabajar.
    */
    nombre: string;

    /**
    * Indicador de la descripcion del recurso a trabajar.
    */
    descripcion: string;

    /**
    * Indicador de la direccion URl del recurso a trabajar.
    */
    link:string

}