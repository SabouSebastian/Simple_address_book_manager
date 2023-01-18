
$(document).ready(function() {

$("#togglePassword").click(function() {
    password = $("#password");
    if (password.attr('type') === 'password') {
        password.attr('type', 'text');
        $(this).removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    } else {
        password.attr('type', 'password');
        $(this).removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }
});

});