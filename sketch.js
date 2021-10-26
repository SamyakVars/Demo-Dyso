var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 0

var menu;

var bgMusic;

var angle = 0;

var basew = 160;
var baseh = 90;

var loaded = true


// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg
//Platforms --- Maaot

// To Do List: DMOG
// Better Speechboxes 



// If done with game then disable spacebar speech though
function preload(){
}

function soundLoaded(song){
  loaded = false
}

function setup() {
  
  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  menu = new MainMenu()
  endImg = loadImage("lvl1/End Screen.jpeg")
  bgMusic = loadSound("BgMusic1.wav", soundLoaded)
  
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(menu.menuBgImg); 

  if(loaded){
    background(menu.loadingImg); 
    push()
    translate(width / 2, height / 2)
    rotate(angle)
    strokeWeight(4)
    stroke(255)
    line(0, 0, 100, 0)
    angle += 10
    pop()
  }else {
    menu.play()

    drawSprites();
    
  }

  
}