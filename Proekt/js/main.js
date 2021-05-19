$('.dop').hide();

var but1 = $('.open').click(
    function(){
        $(".open").addClass("disabledbutton");
        $("div").addClass("shadow");
        $('.dop').show();
        $(".dop").fadein();
});
    
var but2 = $('.close').click(
    function(){
        $(".open").removeClass("disabledbutton");
        $("div").removeClass("shadow");
        $('.dop').hide();
});