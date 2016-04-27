$(window).resize(function () {

});

$(document).ready(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var w_width = $(window).width();
                if(w_width > 800) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 110
                    }, 750);
                    return false;
                }
                else{
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 750);
                    return false;
                }
            }
        }
    });

    $("#ios-button").css('background-position','-55px');
    $("#android-button, #ios-button, #windows-button").hover(function () {
        $(this).css('background-position','-55px');
    });
    $("#android-button, #ios-button, #windows-button").mouseleave(function () {
        if($(this).hasClass("active")){

        }
        else {
            $(this).css('background-position', '0px');
        }
    });
    $("#ios-button").click(function () {
        $(this).css('background-position', '-55px');
        $(this).addClass("active");
        $("#windows-button").removeClass("active");
        $("#android-button").removeClass("active");
        $("#windows-button").css('background-position', '0px');
        $("#android-button").css('background-position', '0px');
        $("#screenshots-android-wrapper").css('display','none');
        $("#screenshots-windows-wrapper").css('display','none');
        $("#screenshots-ios-wrapper").css('display','block');
    });
    $("#android-button").click(function () {
        $(this).css('background-position', '-55px');
        $(this).addClass("active");
        $("#windows-button").removeClass("active");
        $("#ios-button").removeClass("active");
        $("#windows-button").css('background-position', '0px');
        $("#ios-button").css('background-position', '0px');
        $("#screenshots-ios-wrapper").css('display','none');
        $("#screenshots-windows-wrapper").css('display','none');
        $("#screenshots-android-wrapper").css('display','block');
    });
    $("#windows-button").click(function () {
        $(this).css('background-position', '-55px');
        $(this).addClass("active");
        $("#ios-button").removeClass("active");
        $("#android-button").removeClass("active");
        $("#ios-button").css('background-position', '0px');
        $("#android-button").css('background-position', '0px');
        $("#screenshots-ios-wrapper").css('display','none');
        $("#screenshots-android-wrapper").css('display','none');
        $("#screenshots-windows-wrapper").css('display','block');
    });

    var w_width = $(window).width();
    if(w_width > 800) {
        var clients = $('.clients-container').length;
        var clientsWidth = 350 * clients;
        //var clientsLeft = clientsWidth/3;
        var clientsWidthStr = clientsWidth.toString();
        //clientsLeft = clientsLeft.toString();
        $("#clients-container-inner").css('width', clientsWidthStr);

        var left = $('#clients-container-inner').css('left');
        if (clients > 3) {
            $("#clients-next").fadeIn(300);
        }
        else {
            $("#clients-next").fadeOut(300);
        }
        $("#clients-next").click(function () {
            var newLeft = $('#clients-container-inner').css('left');
            newLeft = parseInt(newLeft, 10) - 350;
            $('#clients-container-inner').animate(
                {
                    left: newLeft
                }
            );
            if (newLeft <= -(clientsWidth - 1050)) {
                $("#clients-next").fadeOut(300);
            }
            else {
                $("#clients-prev").fadeIn(300);
            }
        });
        $("#clients-prev").click(function () {
            var newLeft = $('#clients-container-inner').css('left');
            newLeft = parseInt(newLeft, 10) + 350;
            $('#clients-container-inner').animate({
                left: newLeft
            });
            if (newLeft >= 0) {
                $("#clients-prev").fadeOut(300);
            }
            else {
                $("#clients-next").fadeIn(300);
            }
        });


        var feedback = $('#feedback-container-inner .container-wrapper').length;
        var feedbackWidth = 515 * feedback;
        //var clientsLeft = clientsWidth/3;
        var feedbackWidthStr = feedbackWidth.toString();
        //clientsLeft = clientsLeft.toString();
        $("#feedback-container-inner").css('width', feedbackWidthStr);

        var left = $('#feedback-container-inner').css('left');
        if (feedback > 2) {
            $("#feedback-next").fadeIn(300);
        }
        else {
            $("#feedback-next").fadeOut(300);
        }
        $("#feedback-next").click(function () {
            var newLeft = $('#feedback-container-inner').css('left');
            newLeft = parseInt(newLeft, 10) - 515;
            $('#feedback-container-inner').animate(
                {
                    left: newLeft
                }
            );
            if (newLeft <= -(feedbackWidth - 1345)) {
                $("#feedback-next").fadeOut(300);
            }
            else {
                $("#feedback-prev").fadeIn(300);
            }
        });
        $("#feedback-prev").click(function () {
            var newLeft = $('#feedback-container-inner').css('left');
            newLeft = parseInt(newLeft, 10) + 515;
            $('#feedback-container-inner').animate({
                left: newLeft
            });
            if (newLeft >= 0) {
                $("#feedback-prev").fadeOut(300);
            }
            else {
                $("#feedback-next").fadeIn(300);
            }
        });


        $('#top').waypoint(function (direction) {
            if (direction == "down") {
                $("#header-scroll").animate({top: 0, left: 0});
            }
            else {
                $("#header-scroll").animate({top: -250, left: 0});
            }
        }, { offset: -70 });

    }else{
        $('#top').waypoint(function (direction) {
            if (direction == "down") {
                $("#logo-wrapper").css('width','110px');
                $("#logo-wrapper").css('height','20px');
                $("#logo").css('width','110px');
                $("#logo").css('height','auto');
            }
            else {
                $("#logo-wrapper").css('width','220px');
                $("#logo-wrapper").css('height','55px');
                $("#logo").css('width','auto');
                $("#logo").css('height','45px');
            }
        }, { offset: -20 });
    }

});






