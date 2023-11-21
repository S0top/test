var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cde6a0eb-8fe7-4c47-96ce-2a78cc3f65ab","a8278984-8c39-4632-8ede-2bd83d0291c4","062c40f8-e5ba-4f4f-92bd-882566d889d6","cb2421d2-9898-476d-b3be-f5c5eed58600","568724a8-c5c2-4ba7-b99a-069efda41621","62dbc4ab-74fa-46cc-bbd3-9f1b83401d24","4d3279f6-5405-4564-90b6-751106c02847","bc7696ba-a036-4b8b-866a-02dadb8b8d78","2ae5d44e-f5f1-4f10-8821-9704e26a776c"],"propsByKey":{"cde6a0eb-8fe7-4c47-96ce-2a78cc3f65ab":{"name":"Sky","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vaznLR46UC6PEhWKIJN_8tteD2t0cpRd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cde6a0eb-8fe7-4c47-96ce-2a78cc3f65ab.png"},"a8278984-8c39-4632-8ede-2bd83d0291c4":{"name":"Sidewalk","sourceUrl":null,"frameSize":{"x":100,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"KeRYgzlnwd.k7XyBR848CX3EyZksJVWr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":13},"rootRelativePath":"assets/a8278984-8c39-4632-8ede-2bd83d0291c4.png"},"062c40f8-e5ba-4f4f-92bd-882566d889d6":{"name":"Drippy","sourceUrl":null,"frameSize":{"x":52,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"y_Zm7rudVslkvSL.x6DK8.nJ5gNRApNk","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":85},"rootRelativePath":"assets/062c40f8-e5ba-4f4f-92bd-882566d889d6.png"},"cb2421d2-9898-476d-b3be-f5c5eed58600":{"name":"Monstertruck_right","sourceUrl":"assets/api/v1/animation-library/gamelab/Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W/category_vehicles/monstertruck_07.png","frameSize":{"x":396,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W/category_vehicles/monstertruck_07.png"},"568724a8-c5c2-4ba7-b99a-069efda41621":{"name":"Monstertruck_left","sourceUrl":null,"frameSize":{"x":396,"y":247},"frameCount":1,"looping":true,"frameDelay":12,"version":"kM5EeH0iOovjhDBAsg9qfXS8kZ7DjIo1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":247},"rootRelativePath":"assets/568724a8-c5c2-4ba7-b99a-069efda41621.png"},"62dbc4ab-74fa-46cc-bbd3-9f1b83401d24":{"name":"Coin","sourceUrl":"assets/api/v1/animation-library/gamelab/SvxWUpL9m6GYsFf8RzdDa_sxG4_bjp0I/category_stickers/sticker_67.png","frameSize":{"x":208,"y":202},"frameCount":1,"looping":true,"frameDelay":2,"version":"SvxWUpL9m6GYsFf8RzdDa_sxG4_bjp0I","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":202},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SvxWUpL9m6GYsFf8RzdDa_sxG4_bjp0I/category_stickers/sticker_67.png"},"4d3279f6-5405-4564-90b6-751106c02847":{"name":"Monstertruck2_right","sourceUrl":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png","frameSize":{"x":400,"y":263},"frameCount":1,"looping":true,"frameDelay":2,"version":"mxourM2rKgo0A3dS0AVuIai51.8VlQ.T","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":263},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png"},"bc7696ba-a036-4b8b-866a-02dadb8b8d78":{"name":"Monstertruck2_left","sourceUrl":null,"frameSize":{"x":400,"y":263},"frameCount":1,"looping":true,"frameDelay":12,"version":"WUG1DeOo2Q8MiaO.s3uu.21b9zDefMtD","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":263},"rootRelativePath":"assets/bc7696ba-a036-4b8b-866a-02dadb8b8d78.png"},"2ae5d44e-f5f1-4f10-8821-9704e26a776c":{"name":"usefulbackground","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NVgmavC0dAadl1UyiPBnhkVD7sb0MCuZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2ae5d44e-f5f1-4f10-8821-9704e26a776c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//GAME SETUP
// Create the sprites
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;
var sky = createSprite(200,200);
var sidewalk = createSprite(200,375);
sidewalk.debug = false;
sidewalk.setCollider("rectangle",0,10); //,0,5,400,4.1,0
sky.setAnimation("Sky");
sky.scale = "4";
sidewalk.setAnimation("Sidewalk");
sidewalk.scale = "4";
var playerspeed = 10;
var playerjumppower = 15;
var heightlimit = 0;
var falling = false;
var jumping = false;
var fallingspeed = 15;
var coin = createSprite(randomNumber(1,400),randomNumber(190,400));
var monstertruck = createSprite(200,200);
var monstertruck2 = createSprite(200,200);
var maxchance = 100;
var monstertruckspawnbool = false;
var monstertruck2spawnbool = false;
monstertruck.visible = false;
monstertruck2.visible = false;
coin.visible = true;
var difficulty = 0;
var monstertruckway = 0;
var monstertruck2way = 0;
monstertruck.debug = false;
monstertruck2.debug = false;
monstertruck.setCollider("rectangle",0,15);
monstertruck2.setCollider("rectangle",0,15);
var monstertruckhitbox = createSprite("200,200");
var monstertruck2hitbox = createSprite("200,200");
var player = createSprite(200,350);
var playerhitbox = createSprite("200,200");
monstertruckhitbox.visible = false;
monstertruck2hitbox.visible = false;
playerhitbox.visible = false;
var inviswall = createSprite(0,200);
inviswall.width = "10";
inviswall.height = "400";
var inviswall2 = createSprite(400,200);
inviswall2.width = "10";
inviswall2.height = "400";
inviswall.visible = false;
inviswall2.visible = false;
coin.setCollider("circle",0,0);
coin.debug = false;
monstertruck.scale = ".3";
     monstertruck2.scale = ".3";
     coin.setAnimation("Coin");
      player.setAnimation("Drippy");
     player.scale = ".7";
     coin.scale = ".15";
var minchance = 1;
var pausebool = false;
var pausebackgroundsprite = createSprite(200,200);
pausebackgroundsprite.setAnimation("usefulbackground");
pausebackgroundsprite.scale = "4";
pausebackgroundsprite.alpha = "0.5";
pausebackgroundsprite.visible = false;
var guide = false;
function draw() {
  if (guide == false){
  if (pausebool == false){
    if (health > 0){
  var monstertruckrandom = randomNumber(minchance,maxchance);
  var monstertruckrandom2 = randomNumber(minchance,maxchance);
  // BACKGROUND
  // draw the ground and other background
     coin.rotation = randomNumber(-5,5);
     if (player.y > 400){
       health -= 5;
     }
     monstertruckhitbox.x = monstertruck.x - 5;
      monstertruckhitbox.y = monstertruck.y;
      monstertruckhitbox.scale = ".5";
      ///
      monstertruck2hitbox.x = monstertruck2.x - 5;
      monstertruck2hitbox.y = monstertruck2.y;
      monstertruck2hitbox.scale = ".5";
      ///
      playerhitbox.scale = ".1";
      playerhitbox.x = player.x;
      playerhitbox.y = player.y;
      if (monstertruck.visible == true){
      if (playerhitbox.isTouching(monstertruckhitbox)){
        health -= 5;
      }
      }
      if (monstertruck2.visible == true){
      if (playerhitbox.isTouching(monstertruck2hitbox)){
        health -= 5;
      }
      }
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
     
  // if the player touches the target
  // the score goes up, the target resets

  // JUMPING
  // if the player has reached the ground
  // stop moving down
     if (jumping != true){
     player.velocityY = fallingspeed;
     }
     if (player.isTouching(sidewalk)){
       player.velocityY = 0;
       falling = false;
     }
     if (monstertruck.visible == true){
      if (player.isTouching(monstertruck)){
       player.velocityY = 0;
       falling = false;
     }
     }
     if (monstertruck2.visible == true){
     if (player.isTouching(monstertruck2)){
       player.velocityY = 0;
       falling = false;
     }
     }
      if (player.isTouching(coin)){
       coin.x = randomNumber(1,400);
       coin.y = randomNumber(190,400);
       var minormax = randomNumber(1,5);
        if (minormax == 1){
        if (minchance < 50){
       minchance += 1;
       }
       }
       if (minormax == 2){
        if (maxchance > 51){
       maxchance -= 1;
       }
       }
      difficulty += 0.1;
      score += 1;
     }
  // if the player presses the up arrow
  // start moving up
  if (jumping == true) if (player.y > heightlimit) {
     player.velocityY = -playerjumppower;
    }else {
    if (player.y < heightlimit) if (falling != true) {
      jumping = false;
      falling = true;
    }
  }
    if (keyDown("up")) if (jumping != true)if (falling != true) {
      heightlimit = player.y - 150;
      jumping = true;
  } 
  if (keyDown("w")) if (jumping != true)if (falling != true) {
      heightlimit = player.y - 150;
      jumping = true;
  } 
  if (keyDown("space")) if (jumping != true)if (falling != true) {
      heightlimit = player.y - 150;
      jumping = true;
  } 
  //
  if (keyDown("left")) {
    player.velocityX = -playerspeed;
  } 
  if (keyDown("a")) {
    player.velocityX = -playerspeed;
  } 
  if (keyWentUp("left")) {
    player.velocityX = 0;
  }
   if (keyWentUp("a")) {
    player.velocityX = 0;
  }
  if (keyDown("right")) {
    player.velocityX = playerspeed;
  } 
  if (keyWentUp("right")) {
    player.velocityX = 0;
  }
  if (keyDown("d")) {
    player.velocityX = playerspeed;
  } 
  if (keyWentUp("d")) {
    player.velocityX = 0;
  }
  // if the player reaches the top of the jump
  // start moving down
  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
     if (monstertruckrandom == 50) {
       if (monstertruckspawnbool == false) {
        var random = randomNumber(1,2);
        if (random == 1){
           monstertruck.setAnimation("Monstertruck_right");
         monstertruck.x = -100;
         monstertruckway = 1;
        }
         if (random == 2){
           monstertruck.setAnimation("Monstertruck_left");
         monstertruck.x = 450;
         monstertruckway = 2;
        }
         monstertruck.y = 360;
         monstertruck.visible = true;
         monstertruckspawnbool = true;
       }
     }
    if (monstertruckspawnbool == true) {
      if (monstertruckway == 1){
      if (monstertruck.x < 450){
      monstertruck.velocityX = 1 + difficulty;
      }else{
        monstertruckspawnbool = false;
        monstertruck.visible = false;
         monstertruck.velocityX = 0;
      }
      }
       if (monstertruckway == 2){
      if (monstertruck.x > -100){
      monstertruck.velocityX = -1 - difficulty;
      }else{
        monstertruckspawnbool = false;
        monstertruck.visible = false;
         monstertruck.velocityX = 0;
      }
      }
    }
    ///////// /////////
    
    if (monstertruckrandom2 == 50) {
       if (monstertruck2spawnbool == false) {
        var random2 = randomNumber(1,2);
        if (random2 == 1){
           monstertruck2.setAnimation("Monstertruck2_right");
         monstertruck2.x = -100;
         monstertruck2way = 1;
        }
         if (random2 == 2){
           monstertruck2.setAnimation("Monstertruck2_left");
         monstertruck2.x = 450;
         monstertruck2way = 2;
        }
         monstertruck2.y = 360;
         monstertruck2.visible = true;
         monstertruck2spawnbool = true;
       }
     }
    if (monstertruck2spawnbool == true) {
      if (monstertruck2way == 1){
      if (monstertruck2.x < 450){
      monstertruck2.velocityX = 1 + difficulty;
      }else{
        monstertruck2spawnbool = false;
        monstertruck2.visible = false;
         monstertruck2.velocityX = 0;
      }
      }
       if (monstertruck2way == 2){
      if (monstertruck2.x > -100){
      monstertruck2.velocityX = -1 - difficulty;
      }else{
        monstertruck2spawnbool = false;
        monstertruck2.visible = false;
         monstertruck2.velocityX = 0;
      }
      }
    }
  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  if (player.isTouching(inviswall)){
    player.x = 30;
       
     }
     if (player.isTouching(inviswall2)){
        player.x = 370;
      
     }
     if (keyWentDown("enter")){
       pausebool = true;
       player.velocityX = 0;
       player.velocityY = 0;
       monstertruck.velocityX = 0;
       monstertruck.velocityY = 0;
       monstertruck2.velocityX = 0;
       monstertruck2.velocityY = 0;
     }
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  fill("green");
  if (health <= 50){
    fill("yellow");
  }
  if (health <= 30){
    fill("red");
  }
  text (health, 350, 30);
  fill("black");
  text("Score:",5,30);
  text(score,70,30);
    }
  }else{
  pausebackgroundsprite.visible = true;
  if (keyWentDown("enter")){
    pausebool = false;
    pausebackgroundsprite.visible = false;
          //jumping = false;
  }
  drawSprites();
  textSize(35);
  text("Pause",150,200);
  fill("white");
  stroke("black");
  strokeWeight(1);
  textSize(20);
  text("Score:",100,250);
  text(score,165,250);
  ///
  textSize(20);
  text("Health:", 220, 250);
  fill("green");
  if (health <= 50){
    fill("yellow");
  }
  if (health <= 30){
    fill("red");
  }
  text (health, 285, 250);
  }
  // GAME OVER
  // if health runs out
  // show Game over
  if (health <= 0) {
    background("black");
    fill("red");
    textSize(50);
    text("Game Over!" , 60, 170);
    fill("yellow");
    textSize(20);
    text("Do you wish to continue?" , 90, 200);
    fill("white");
  stroke("black");
  strokeWeight(1);
  textSize(20);
  text("Score:",160,250);
  text(score,225,250);
  stroke("green");
  strokeWeight(5);
  noFill();
  rect(170,290);
  fill("white");
  text("Yes",180,321);
  if (World.mouseX <= 220) if (World.mouseY <+ 330){
    if (mouseWentDown("left")){
      difficulty = 0;
      player.x = 200;
      player.y = 300;
      health = 100;
      monstertruck.visible = false;
      monstertruck2.visible = false;
      coin.x = randomNumber(1,400);
      coin.y = randomNumber(190,400);
      score = 0;
      pausebool = false;
      jumping = false;
      player.velocityX = 0;
    }
  }
  }
}else{
  
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
