var Table = {
    insertTR: function(TableSelector,resp) {
        if(Array.isArray(resp)) {
            const table = document.querySelector(TableSelector);
            resp.forEach(function(cadastro) {
                var tr = document.createElement('tr');
                var cellCheckBox = tr.insertCell(-1);
                cellCheckBox.innerHTML = '<span class="custom-checkbox">'+
                                            '<input type="checkbox" id="'+cadastro._id+'" name="options[]" value="1">'+
                                            '<label for="checkbox1"></label>'+
                                        '</span>';
                var cellCPF_CNPJ = tr.insertCell(-1);
                cellCPF_CNPJ.innerHTML = cadastro.cpf_cnpj;
                var cellActions = tr.insertCell(-1);
        
                cellActions.innerHTML = '<a href="#editcpf_cnpjModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" title="Editar"></i></a>'+
                                        '<a href="#deletecpf_cnpjModal" class="delete" data-toggle="modal"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                table.append(tr);
            });

        }
        var eventsTrigger = function() {

        }
    },

    eventsTrigger: function() {
        //$("#myModal").modal("hide");
    }
    
}

