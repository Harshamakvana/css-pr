// COUNTER

function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
    }
    
    
    numCounter("student",14500,20);
    numCounter("comment",569,100);
    numCounter("services",32500,50);
    numCounter("award",33,400);

    // FAQ

    $(document).ready(function () {
        $(".faq-question h3").click(function(){
            $(this).parent(".faq-question").find(".faq-contant").slideToggle();
            $(this).parent(".faq-question").prevAll(".faq-question").find(".faq-contant").slideUp();
            $(this).parent(".faq-question").nextAll(".faq-question").find(".faq-contant").slideUp();
        });
    });

    // STICKY HEADER

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $("header").addClass("a-active")
            $(".back-to-top").fadeIn();
    }
        else{
            $("header").removeClass("a-active")
            $(".back-to-top").fadeOut();
           }
    });

    $(document).ready(function () {
        $(".toggle-menu").click(function () {
            $(".toggle-menu").hide();
            $(".close-btn").show();
            $("nav").slideDown();
        });
        $(".close-btn").click(function () {
            $(".toggle-menu").show();
            $(".close-btn").hide();
            $("nav").slideUp();
        })
        $(".back-to-top").click(function () {
            $("html").animate({ scrollTop: '0' });
        })

    });
    
    // LOADER
    $(window).on("load",function() {
        $(".overlay").fadeOut(5000);
        });

