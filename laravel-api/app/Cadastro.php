<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cadastro extends Model
{
    protected $fillable = ['cpf_cnpj'];

    protected $dates = ['deleted_at'];

    function cadastro() {
        return $this->hasMany('App\Cadastro');
    }
}
