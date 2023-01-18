
$(document).ready(function() {

    $('#register_button').prop('disabled', true);
    $("#password,#confirm_password,#username").keyup(function(event) {

        username = $("#username").val();
        password = $("#password").val();
        confirm_password = $("#confirm_password").val();

        if(username == "")
            $('#register_button').prop('disabled', true);

        if (password != confirm_password) {
            $('#register_button').prop('disabled', true);
            $("#confirm_password_error").text("Passwords don't match");
            $("#confirm_password_error").css("color","red");
        } else
        if(password != "" && confirm_password != "" && username != ""){
            $("#register_button").removeAttr("disabled");
            $("#confirm_password_error").text("Passwords match");
            $("#confirm_password_error").css("color","green");
        }
    });
});
