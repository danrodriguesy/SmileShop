$(document).ready(function(){
    $('.whatsapp').mask('(99) 99999-9999');

    $('#radio').click(function() {
        if($(this).val() == '0'){
            $('input[name=autorizarContato]').prop('checked', true);
            $(this).val('1');
        } else {
            $('input[name=autorizarContato]').prop('checked', false);
            $(this).val('0');
        }
    });

});