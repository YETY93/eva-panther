/**
 * @description Clase  que contiene la informacion y los
 * datos sobre las herramientas de software
 * 
 * @author Yesid Rangel
 */
export interface Herramienta{

    
    /**
    * Indicador deL id de la herramienta.
    */
    id: number;

    /**
    * Indicador del logo en un  de la herramienta.
    */
    logoUrl?: string;
    
    /**
    * Indicador del nombre  de la herramienta.
    */
    nombre: string;

    /**
    * Indicador de la descripcion de la herramienta.
    */
    descripcion: string;

    /**
    * Indicador del link de la ubicacion de la herramienta.
    */
    link:string;

}