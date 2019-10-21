<?php

/**
 * <b>Descripcion:</b> Clase que <br/>contiene los usuarios de la aplicación
 * <b>Caso de Uso:</b> PANTHER-Seguridad <br/>
 *
 * @author Josué Nicolás Pinzón Villamil <a href = "mailto:jpinzon@j4sysol.com">jpinzon@j4sysol.com</a>
 */
class User
{

    /**
     * Identificador de la clase
     *
     * @var float Id
     */
    public $id;

    /**
     * Nombre de usuario
     *
     * @var string user
     */
    public $user;

    /**
     * Contraseña de usuario
     *
     * @var string password
     */
    public $password;

    /**
     * Roles asociados
     *
     * @var Rol roles
     */
    public $roles;

    /**
     * Token de acceso autorización
     * 
     * @var string keyAPI
     */
    public $keyAPI;

    /**
     * Nombre del usuario
     * 
     * @var string nameUser
     */
    public $nameUser;

    /**
     * Apellido del usuario
     * 
     * @var string lastName
     */
    public $lastName;

    /**
     * Número de telefono del usuario
     * 
     * @var string phoneNumber
     */
    public $phoneNumber;



    // function __construct($id,$roles,$password,$keyAPI, $user)
    // {
    // $this->id = $id;
    // $this->user = $user;
    // $this->password = $password;
    // $this->keyAPI = $keyAPI;
    // $this->roles = $roles;
    // }
    
    /**
     *
     * @return the $user
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     *
     * @return the $password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     *
     * @param string $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     *
     * @return the $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     *
     * @return the $roles
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     *
     * @param number $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     *
     * @param field_type $roles
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;
    }

    /**
     *
     * @return the $keyAPI
     */
    public function getKeyAPI()
    {
        return $this->keyAPI;
    }

    /**
     *
     * @param string $keyAPI
     */
    public function setKeyAPI($keyAPI)
    {
        $this->keyAPI = $keyAPI;
    }

    /**
     *
     * @return the $nameUser
     */
    public function getnameUser()
    {
        return $this->nameUser;
    }

    /**
     *
     * @param string $nameUser
     */
    public function setnameUser($nameUser)
    {
        $this->nameUser = $nameUser;
    }

    /**
     *
     * @return the $lastName
     */
    public function getlastName()
    {
        return $this->lastName;
    }

    /**
     *
     * @param string $lastName
     */
    public function setlastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     *
     * @return the $phoneNumber
     */
    public function getphoneNumber()
    {
        return $this->phoneNumber;
    }

    /**
     *
     * @param string $phoneNumber
     */
    public function setphoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }
}
?>

