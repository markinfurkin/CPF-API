var API = {
    path : 'http://local.api.cadastro/api/',
    getAll: function () {
        $.ajax({
            url: this.path + "cadastro",
            crossDomain: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: "json",
          }).done(function(resp) {
           console.log(resp);
           Table.insertTR("#table-cpf-cnpj",resp);
          });
    }
}