<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Cadastro extends Eloquent
{
    protected $fillable = ['cpf_cnpj'];

    protected $dates = ['deleted_at'];

    function cadastro() {
        //return $this->hasMany('App\Cadastro');
        return DB::collection('cadastro')->get();
    }
}
