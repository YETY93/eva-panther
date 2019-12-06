/**
 * @description Clase  que contiene los metodos para
 * la Administracion de usuarios
 * 
 * @author Yesid Rangel
 */
export interface UsuarioInt {

    /**
    * Indicador deL id del usuario.
    */
    id?: number,

    /**
    * Indicador del nombre del usuario.
    */
    nameUser: string,

    /**
    * Indicador del apellido ddel usuario.
    */
    lastName: string,

    /**
    * Indicador del telefono de contacto del usuario.
    */
    phoneNumber: string,

    /**
    * Indicador del nombre o correo  del usuario.
    */
    user: string,

    /**
    * Indicador de la contraseña id del usuario.
    */
    password: string,

    /**
    * Indicador del rol del usuario.
    */
    roles: string
}