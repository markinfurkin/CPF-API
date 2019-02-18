var API = {
    path : 'http://local.api.cadastro/api/',
    getAll: function () {
        $.ajax({
            url: this.path + "cadastro",
          }).done(function(resp) {
           console.log(resp)
          });
    }
}