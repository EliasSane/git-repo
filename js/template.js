$(document).ready(function () {

    $(".header_search .search_button_activator").click(function () {
        $(this).toggle(100);
        $(this).parent().find('.header_search_pop').toggle(200);
        $(this).parent().find('.search_button_deactivator').toggle(100);
        
    });
    $(".header_search .search_button_deactivator").click(function () {
        $(this).toggle(100);
        $(this).parent().find('.header_search_pop').toggle(200);        
        $(this).parent().find('.search_button_activator').toggle(100);
    });
    


    



});
