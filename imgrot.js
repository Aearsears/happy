function movecat(cat) {
    //var elem = document.getElementsByClassName("bongocat")[0];
    var left = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (left>window.innerWidth) {
        clearInterval(id);
      } else {
        left=left+5; 
        //elem.style.bottom = pos + 'px'; 
        cat.style.left = left + 'px'; 
        cat.style.transform="skewY("+getRandomInt(1,500)+"deg) "+"rotate("+getRandomInt(1,500)+"deg)";
      }
    }
    //cat.style.display="None";
  }

function add_cat() {
    var src = "img/bongocat.gif";
    var img=show_image(src,"BONGOCAT");
    movecat(img);
}


function show_image(src,alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = getRandomInt(1,500);
    img.height = getRandomInt(1,500);
    img.alt = alt;
    img.className="bongocat";
    img.style.position="relative";
    img.style.left=getRandomInt(0,window.innerWidth);
    img.style.bottom=getRandomInt(0,window.innerHeight);
    //document.body.appendChild(img);
    document.getElementById("bongocats").appendChild(img);
    return img
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createcats(){
    var i;
    for( i =0; i<1000;i++){
        add_cat();
    }
}

createcats();