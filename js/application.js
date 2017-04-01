function show_mobile_header() {
    $("#div-menu").click(function() {
        $("#header-mobile").slideToggle(300);
        if ($("#mobile-menu").is(":visible")) {
            $('#mobile-menu').hide();
            $('#cross-mobile-menu').css("display", "block");
        } else {
            $('#mobile-menu').css("display", "block");
            $('#cross-mobile-menu').hide();
        }
    });
}

function hover_home_title() {
    $("#title-eti").mouseover(function() {
        $('#rect-eti').css("background-image", "linear-gradient(90deg, #003BBD 12%, #3D70FD 91%)");
    });
    $("#title-eti").mouseout(function() {
        $('#rect-eti').css("background-image", "none");
    });
    $("#title-com").mouseover(function() {
        $('#rect-com').css("background-image", "linear-gradient(90deg, #70000D 18%, #F0001D 100%)");
    });
    $("#title-com").mouseout(function() {
        $('#rect-com').css("background-image", "none");
    });
    $("#title-four").mouseover(function() {
        $('#rect-four').css("background-image", "linear-gradient(90deg, #F76B1C 8%, #FBDA61 100%)");
    });
    $("#title-four").mouseout(function() {
        $('#rect-four').css("background-image", "none");
    });
}

function flip_home_circle() {
    $("#circle1").on('flip:done', function() {
        $('.huile').fadeToggle("slow");
        $('.bitmap').fadeToggle("slow");
    });
    $("#circle2").on('flip:done',function() {
        $('.chapelier').fadeToggle("slow");
        $('.couleur').fadeToggle("slow");
        $('.bitmap2').fadeToggle("slow");
    });
    $("#circle3").on('flip:done',function() {
        $('.fourniture').fadeToggle("slow");
    });
    $('#circle1').flip({
        trigger: 'hover',
        speed: 1000
    });
    $('#circle2').flip({
        trigger: 'hover',
        speed: 1000
    });
    $('#circle3').flip({
        trigger: 'hover',
        speed: 1000
    });
}
