<?php

use Illuminate\Database\Seeder;

class CadastroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Cadastro::create([
            'cpf_cnpj'=> '077.546.689-12',
        ]);
    }
}
