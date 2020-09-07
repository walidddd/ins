
var x = document.getElementById("myAudio"); 
function playAudio() { 
  
    if(document.getElementById("myText").value === ""){
        x.play();
        $(".main-form .input-f").css('animation', 'loadingf 0.4s linear 2')
        
    } else{
        console.log('js');
        $(".main-form").addClass("d-none");
        $(".main-form-2").addClass("d-block");
        x.play(); 
        setTimeout(function () {
        $(".main-form-2").removeClass("d-block");
        $(".sk").fadeIn();
        $(".sk").removeClass("d-none");
            x.play();
            var vl = $(".input-f input").val();
            $(".text").text(vl);
            
    }, 7000)
        
    }
}

function power() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
power();
window.onload = function () {
    console.log('ldld');
    $(".form-main ").css('transform', 'scale(1)');
    $(".after-header").fadeIn(1000)
}
function mainON() {
    $(".sk").addClass("d-none");
    $(".main-3").removeClass("d-none");
    $(".sk").addClass("d-none");
    x.play(); 
        setTimeout(function () {
            $(".main-3").addClass("d-none");
            $(".main-form-4").addClass("d-block");
            
            
    }, 2000);
    
    
}
function x1() {
    $(".sk").addClass("d-none");
    $(".main-3").removeClass("d-none");
    $(".sk").addClass("d-none");
    x.play(); 
        setTimeout(function () {
            $(".main-3").addClass("d-none");
            $(".x1").addClass("d-block");
            
            
    }, 2000);
    
    
}
function x2() {
    $(".sk").addClass("d-none");
    $(".main-3").removeClass("d-none");
    $(".sk").addClass("d-none");
    x.play(); 
        setTimeout(function () {
            $(".main-3").addClass("d-none");
            $(".x-2").removeClass("d-none");
            
            
    }, 2000);
    
    
}
function x3() {
    $(".sk").addClass("d-none");
    $(".main-3").removeClass("d-none");
    $(".sk").addClass("d-none");
    x.play(); 
        setTimeout(function () {
            $(".main-3").addClass("d-none");
            $(".x-3").removeClass("d-none");
            
            
    }, 2000);
    
    
}
function mainON4() {
    $("#shiva h1").text('250');
    console.log("skskks")
    
    
}
function mainON2() {
    setTimeout(function () {
        $(".main-form-4").removeClass("d-block");
        $(".x-2").removeClass("d-block");
        $(".x-3").removeClass("d-block");
        $(".x-2").addClass("d-none");
        $(".x-3").addClass("d-none");
        $(".main-form-end").addClass("d-block");
        
        $(".main-form-end .nu-1").addClass("d-block");
        $(".main-form-end .nu-1").removeClass("d-none");
    }, 8000)
}
function mainON3() {
    setTimeout(function () {
        $(".main-form-4").removeClass("d-block");
        $(".x-2").removeClass("d-block");
        $(".x-3").removeClass("d-block");
        $(".x-2").addClass("d-none");
        $(".x-3").addClass("d-none");
        $(".main-form-end").addClass("d-block");
        $(".main-form-end .nu-2").addClass("d-block");
        $(".main-form-end .nu-2").removeClass("d-none");
        
    }, 8000)
}
function mainON4() {
    setTimeout(function () {
        $(".main-form-4").removeClass("d-block");
        $(".x-2").removeClass("d-block");
        $(".x-3").removeClass("d-block");
        $(".x-2").addClass("d-none");
        $(".x-3").addClass("d-none");
        $(".main-form-end").addClass("d-block");
        $(".main-form-end .nu-3").addClass("d-block");
        $(".main-form-end. nu-3").removeClass("d-none");
        
    }, 8000)
}

