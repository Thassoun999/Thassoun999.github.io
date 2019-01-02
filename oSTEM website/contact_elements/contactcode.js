console.log("I work");


$(document).ready(function(){
    $('.form-submit').click(function(event){
        
        var fullName = $('.full').val();
        var email = $('.email').val();
        var message = $('.message').val();

        var status = $('.status');
        status.empty();

        if(email.length >= 5 && email.includes('@') && email.includes('.')){
           status.append('<div>Email is valid</div>');
        } else {
           status.append('<div>Email is not valid</div>');
           event.preventDefault();

        }

        if(message.length >= 10){
            status.append('<div>Message is valid</div>');
        } else {
            status.append('<div>Message is not valid</div>');
            event.preventDefault();

        }

        if(fullName.length == 0){
            status.append('<div>Name Field not valid</div>')
            event.preventDefault();
        }else{
            status.append('<div>Name Field is valid</div>')
        }
    })
})