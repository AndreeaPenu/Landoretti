$(function() {
    $("#auction-form").validate({
        rules: {
            title: {
                required: true
            },
            description: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            var name = $(element).attr("name");
            $('.error-message').show();
            $('.error-message').append(" <li> Please enter a " + name + " for your auction </li>");
        },
        success: function(element) {
            $('#success').css('display', 'block');
        }
    });
});

$(function() {
    $("#register-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            var name = $(element).attr("name");
            $('.error-message').show();
            $('.error-message').append(" <li> Please fill in an existing " + name + " </li>");
        },
        success: function(element) {
            $('#success').css('display', 'block');
        }
    });
});