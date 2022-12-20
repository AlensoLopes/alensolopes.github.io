// NAV STICKY AND SET BACKGROUND COLOR

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 400) {
            $("nav").css('background-color', '#5C5346');
        } else {
            $("nav").css('background-color', 'transparent');
            $("nav").css('transition', 'background-color 0.5s ease-in-out');
        }
    });
});

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 400) {
            $("#menu-burger").css('background-color', '#5C5346');
        } else {
            $("#menu-burger").css('background-color', 'transparent');
            $("#menu-burger").css('transition', 'background-color 0.5s ease-in-out');
        }
    });
});
// AFFICHAGE PROJETS

$(document).ready(function (){
    $("#p_web").css('display','none');
    $("#p_ai").css('display','none');
    $("#p_other").css('display','none');
});

$(document).ready(function(){
    $("#all").click(function(){
        $("#p_all").toggle();
        $("#p_web").css('display','none');
        $("#p_ai").css('display','none');
        $("#p_other").css('display','none');
    });
});

$(document).ready(function(){
    $("#web").click(function(){
        $("#p_web").css('transition', 'display 0.5s ease-in-out');
        $("#p_web").toggle();
        $("#p_all").css('display','none');
        $("#p_ai").css('display','none');
        $("#p_other").css('display','none');
    });
});

$(document).ready(function(){
    $("#ai").click(function(){
        $("#p_ai").toggle();
        $("#p_all").css('display','none');
        $("#p_web").css('display','none');
        $("#p_other").css('display','none');
    });
});

$(document).ready(function(){
    $("#other").click(function(){
        $("#p_other").toggle();
        $("#p_all").css('display','none');
        $("#p_ai").css('display','none');
        $("#p_web").css('display','none');
    });
});

// SCROLL TO

$(document).ready(function(){
    $("#b_about").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#b_project").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#b_contact").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#b_about_b").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#b_project_b").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#b_contact_b").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#skills_a").click(function(){
        $('html, body').animate({
            scrollTop: $("#skill").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#website_a").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#ia_a").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#ia_a_b").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function(){
    $("#project_a").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});