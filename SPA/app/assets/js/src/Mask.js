Mask = {
    init: function () {
        $('.cpf').mask('000.000.000-00', {reverse: true});
        $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
        this.events();
    },
    events: function() {
        $('[name=cpf_cnpj_radio]').on('change', function () {
            console.log('chnged');
            if(this.id == 'cpf') {
                $(this).closest('.modal-body').find('#newCPF_CNPJ').removeClass('cnpj').addClass('cpf').mask('000.000.000-00', {reverse: true});
            } else {
                $(this).closest('.modal-body').find('#newCPF_CNPJ').removeClass('cpf').addClass('cnpj').mask('00.000.000/0000-00', {reverse: true});
            }
            
        });
    }
}