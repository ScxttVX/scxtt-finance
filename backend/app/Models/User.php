<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory;

    /**
     * Os atributos que podem ser preenchidos em massa.
     *
     * @var array
     */
    protected $fillable = [
        'name',       // Permitir que o campo "name" seja preenchido
        'email',      // Permitir que o campo "email" seja preenchido
        'password',   // Permitir que o campo "password" seja preenchido
    ];

    /**
     * Obter o identificador que será armazenado no claim "sub" do JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Retornar um array de claims personalizados a serem adicionados ao JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
