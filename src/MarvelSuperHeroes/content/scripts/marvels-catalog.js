$(document).ready(function () {
    $(".masthead-nav li a").on('click', function () {
        $(".masthead-nav li").removeClass('active');
        $(this).closest('li').addClass('active');
    });
});