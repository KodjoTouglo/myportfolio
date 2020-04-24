$(document).ready(function(){
    $(document).on('submit', '#contact-form', function(e){
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'ajaxContact',
            data: {
                nom: $('#nom').val(),
                email: $('#email').val(),
                objet: $('#objet').val(),
                message: $('#message').val(),
                csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken').val(),
            }, success:function(){
                location.reload();
                $('#contact-form')[0].reset();
            }
        });
    });
});