var screen = document.getElementById("screen");
var ctx = screen.getContext("2d");

// CONST INITIALIZATION
const SCREEN_HEIGHT = 300;
const SCREEN_WIDTH = 350;
// Images Import
var ground = new Image();
ground.src = "images/ground.png";
var pollUp = new Image();
pollUp.src = "images/poll-up.png";
var pollDown = new Image();
pollDown.src = "images/downpoll.png";
var bird = new Image();
bird.src = "images/angryBird.png";

  var bird1 = {
      position: {
          x: 10,
          y: 110
      }
  }
  var pollUp1 = []
   pollUp1[0] = {
      position:{
          x: 80,
          y: 0
      }
  }
  var pollDown1 = []
   pollDown1[0] = {
      position:{
          x:180,
          y:100
      }
  }

 var score = 0;
 function draw(){
  //Images Draw
  ctx.drawImage(ground, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
 
 
  ctx.drawImage(bird, bird1.position.x,bird1.position.y, 20, 20);  
  
    for(let i=0; i<pollUp1.length;i++){
      ctx.drawImage(pollUp, pollUp1[i].position.x, pollUp1[i].position.y, 30, 140);
      pollUp1[i].position.x -=1;
      if(pollUp1[i].position.x == 0){
        pollUp1.push({
          position:{
              x: SCREEN_WIDTH,
              y: 0
          
      }})
      }
      if(bird1.position.x+20 <= pollUp1[i].position.x && bird1.position.y+20 == pollUp1[i].position.y+ 140 ){
        location.reload();
      }
    }
    for(let i=0; i<pollDown1.length;i++){
      ctx.drawImage(pollDown, pollDown1[i].position.x,  pollDown1[i].position.y, 30, 130);
      pollDown1[i].position.x -=1;
      if(pollDown1[i].position.x == 0){
        pollDown1.push({
          position:{
              x: SCREEN_WIDTH,
              y: 100
              
          
      }})
      score++;
      }
      if( bird1.position.x+20 <= pollDown1[i].position.x && bird1.position.y+20 == pollDown1[i].position.y ){
        location.reload();
      }
    }
    
    if(bird1.position.y == 210){
      location.reload();
    }
  bird1.position.y +=1;  
 ctx.fillStyle = 'black';
 ctx.font = '28px Verdana';
 ctx.fillText("Score: "+score, 10,SCREEN_HEIGHT-20);
  
  requestAnimationFrame(draw);
  
}
 draw();

document.addEventListener('keydown',function(e){
  switch(e.keyCode){
      case 38:
     
      bird1.position.y -=15; 
      break; 
      default:
      alert('use only direction Keys to control and spacebar to pause')

  }
})


