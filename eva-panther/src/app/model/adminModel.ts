/**
 * @description Clase  que contiene los metodos para
 * la Administracion de usuarios
 * 
 * @author Yesid Rangel
 */
export interface AdminModel {

     /**
    * Indicador del datos correo para el ingreso o inicio de sesión
    */
    user: string,

    /**
    * Indicador del dato contraseña para el ingreso o inicio de sesión
    */
    password: string,

        /**
    * Indicador del dato nombre de usuario para el ingreso o inicio de sesión
    */
    nameUser?: string,

    /**
    * Indicador del apiKey  de usuario para el ingreso o inicio de sesión
    */
    keyAPI?: string
}
