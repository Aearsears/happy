$(function(){
    $("button").on("click",function(){
    // $("img").animate({
    //     opacity: 0.25,
    //     left: "+=50",
    //     height: "toggle"
    //     },5000,function(){}
    //     );
    addCat();
    }); 
});

// $(function(){
//     // $('.cat').on("click",function() {
    
//         $('.cat').animate({
//             left: '-50%'
//         }, 500, function() {
//             $(this).css('left', '100%');
//             $(this).appendTo('#bongocats');
//         });
    
//         $('.cat').next().animate({
//             left: '50%'
//         }, 500);
//     // });

// });

function addCat(){
    var img = $('<img />', { 
        class: 'cat',
        src: 'img/bongocat.gif',
        alt: 'bongocat',
        width:getRandomInt(1,500),
        height: getRandomInt(1,500),
        position:'relative'
      });
    img.appendTo($('#bongocats'))
    // img.style.left=getRandomInt(0,window.innerWidth);
    // img.style.bottom=getRandomInt(0,window.innerHeight);
};

function addTopCat(){
    var img = $('<img />', { 
        class: 'cat',
        src: 'img/bongocat.gif',
        alt: 'bongocat',
        width:getRandomInt(1,500),
        height: getRandomInt(1,500),
        position:'relative',
        top:"100%"
      });
    img.appendTo($('#bongocats'))
    // img.style.left=getRandomInt(0,window.innerWidth);
    // img.style.bottom=getRandomInt(0,window.innerHeight);
};

$(function(){
    var i;
    for (i = 0; i < 10; i++) {
        // setInterval(addCat,1000);
        // setInterval(spin,5000);
        // setInterval(inOut,5000);
        // addCat();
        addTopCat()
    }
    spin();
    // $(leftRight);
    $(upDown);
});

function leftRight(){
    $(".cat").animate({left: "100%"}, 5000, "linear");
    $(".cat").animate({left: "-100%"}, 5000, "linear", leftRight);
};

function upDown(){
    $(".cat").animate({top: "100%",right:"100%"}, 5000, "linear");
    $(".cat").animate({top: "-100%",right:"-100%"}, 5000, "linear", upDown);
};



function spin() {
    var $elie = $(".cat");
    rotate(0);
    function rotate(degree) {      
        // chrome  
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        // firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            rotate(++degree);
        },10);
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
