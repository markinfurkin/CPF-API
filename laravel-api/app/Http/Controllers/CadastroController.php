<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cadastro;

class CadastroController extends Controller
{
    public function index()
    {
        $cadastros = Cadastro::with('cadastros')->get();
        return response()->json($cadastros);
    }
}
