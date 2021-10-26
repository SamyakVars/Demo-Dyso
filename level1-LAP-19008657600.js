 var touchedSprite

class lvl1{
    constructor(){

        this.level1Group = createGroup()

        this.storylineBool = true
        this.storylinePart = 0

        this.px = mouseX
        this.py = mouseY

        this.w = displayWidth
        this.h = displayHeight

        this.touchGround = true

        this.bgp1 = loadImage("lvl1/Bg1_1.png")
        this.bgp2 = loadImage("lvl1/Bg1_2.png")
        this.bgp3 = loadImage("lvl1/Bg1_3.png")
        this.bgp4 = loadImage("lvl1/Bg1_4.png")

        this.bgx2 = 0
        this.bgx3 = 0
        this.bgx4 = 0


        this.storyp1 = loadImage("lvl1/Speeches/Speech1.png")
        this.storyp2 = loadImage("lvl1/Speeches/Speech2.png")
        this.storyp3 = loadImage("lvl1/Speeches/Speech3.png")
        this.storyp4 = loadImage("lvl1/Speeches/Speech4.png")
        this.storyp5 = loadImage("lvl1/Speeches/Speech5.png")
        this.storyp6 = loadImage("lvl1/Speeches/Speech6.png")
        this.storyp7 = loadImage("lvl1/Speeches/Speech7.png")

        this.panimation = loadAnimation("lvl1/Dyso/Move/red/r1.png", "lvl1/Dyso/Move/red/r2.png", "lvl1/Dyso/Move/red/r3.png", "lvl1/Dyso/Move/red/r4.png", "lvl1/Dyso/Move/red/r5.png", "lvl1/Dyso/Move/red/r6.png", "lvl1/Dyso/Move/red/r7.png", "lvl1/Dyso/Move/red/r8.png")
        this.pidle = loadAnimation("lvl1/Dyso/Move/red/Idle.png")
        this.pdeath = loadAnimation("lvl1/Dyso/Other/d1.png", "lvl1/Dyso/Other/d2.png", "lvl1/Dyso/Other/d3.png", "lvl1/Dyso/Other/d4.png", "lvl1/Dyso/Other/d5.png", "lvl1/Dyso/Other/d6.png", "lvl1/Dyso/Other/d7.png", "lvl1/Dyso/Other/d8.png", "lvl1/Dyso/Other/d9.png", "lvl1/Dyso/Other/d10.png")
        this.pdeath.looping = false
        this.pjump = loadAnimation("lvl1/Dyso/Move/red/j1.png", "lvl1/Dyso/Move/red/j2.png", "lvl1/Dyso/Move/red/j3.png", "lvl1/Dyso/Move/red/j4.png", "lvl1/Dyso/Move/red/j5.png", "lvl1/Dyso/Move/red/j6.png", "lvl1/Dyso/Move/red/j7.png", "lvl1/Dyso/Move/red/j8.png", "lvl1/Dyso/Move/red/j9.png", "lvl1/Dyso/Move/red/j10.png")

        this.moveInstruct = loadImage("lvl1/AD to move.png")
        this.moveInVis = 0

        this.jumpInstruct = loadImage("lvl1/Spacebar to jump.png")
        this.jumpInVis = 0


        this.p1 = new Platform(370, this.h / 1.15, 730, 100)
        this.p2 = new Platform(875, this.h / 1.15, 160, 100)
        this.p3 = new Platform(1090, this.h / 1.18, 155, 150)
        this.p4 = new Platform(1250, this.h / 1.18, 35, 150)
        this.p5 = new Platform(1555, this.h / 1.18, 465, 150)
        this.p6 = new Platform(1865, this.h / 1.18, 35, 150)
        this.p7 = new Platform(2020, this.h / 1.28, 140, 40)
        this.p8 = new Platform(2210, this.h / 1.28, 140, 40)
        this.p9 = new Platform(2355, this.h / 1.18, 35, 150)
        this.p10 = new Platform(2440, this.h / 1.3, 25, 25)
        this.p11 = new Platform(2520, this.h / 1.3, 25, 25)
        this.p12 = new Platform(2595, this.h / 1.27, 35, 100)
        this.p13 = new Platform(2700, this.h / 1.47, 140, 40)
        this.p14 = new Platform(2815, this.h / 1.27, 35, 100)
        this.p15 = new Platform(2987, this.h / 1.32, 140, 40)
        this.p16 = new Platform(3205, this.h / 1.32, 140, 40)
        this.p17 = new Platform(3352, this.h / 1.2, 35, 150)
        this.p18 = new Platform(3440, this.h / 1.22, 35, 30)
        this.p19 = new Platform(3565, this.h / 1.32, 140, 40)
        this.p20 = new Platform(3693, this.h / 1.45, 35, 30)
        this.p21 = new Platform(3770, this.h / 1.63, 35, 30)
        this.p22 = new Platform(3848, this.h / 1.9, 35, 30)
        this.p23 = new Platform(4080, this.h / 1.9, 325, 40)

        this.level1Group.add(this.p1.sprite, this.p2.sprite, this.p3.sprite, this.p4.sprite, this.p5.sprite, this.p6.sprite, this.p7.sprite, this.p8.sprite, this.p9.sprite, this.p10.sprite, this.p11.sprite, this.p12.sprite, this.p13.sprite, this.p14.sprite, this.p15.sprite, this.p16.sprite, this.p17.sprite, this.p18.sprite, this.p19.sprite,this.p20.sprite, this.p21.sprite, this.p22.sprite, this.p23.sprite)


        this.ground = createSprite(this.w / 2, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false
        this.level1Group.add(this.ground)


        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false
        this.level1Group.add(this.groundCollider)


        this.leftCollider = createSprite(displayWidth / 8, this.h / 2, displayWidth / 4, this.h)
        this.leftCollider.visible = false
        this.level1Group.add(this.leftCollider)



        this.lWall = createSprite(-1 * displayWidth / 6.5, this.h, this.w / 3, this.h)
        this.lWall.visible = false

        this.level1Group.add(this.lWall)

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.player = new Plr(this.w / 25.6, this.h / 1.309, this.pidle, this.panimation, this.pjump, this.pdeath)
        this.level1Group.add(this.player.plr)

        // this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        // this.storylineBg.visible = false
        // this.level1Group.add(this.storylineBg)

        this.storyline = createSprite(this.w / 3.5, this.h / 1.5, this.w, this.h / 2)
        this.storyline.scale = 2
        this.storyline.visible = false
        this.level1Group.add(this.storyline)

        this.continueStory = false

        this.gyo1 = new Enemy(this.w / 0.853, this.h / 1.45)
        this.gyo2 = new Enemy(1860, this.h / 1.45)
        this.gyo3 = new Enemy(2815, this.h / 1.7)

        this.level1Group.add(this.gyo1.gyo)
        this.level1Group.add(this.gyo2.gyo)
        this.level1Group.add(this.gyo3.gyo)
        //this.testGyo = new Enemy(300, 600)

        this.cameraPlus = 0
        this.leftcameraPlus = 0
        this.gameState = true

        this.camX = displayWidth

        this.screen = createSprite(camera.position.x, this.h / 2, this.w, this.h)
        this.screen.shapeColor = "black"
        this.screen.visible = false
        this.level1Group.add(this.screen)
        
        this.GO = createSprite(this.w / 2, this.h / 3, 20, 20)
        this.GOimg = loadImage("lvl1/GO.png")
        this.GO.visible = false
        this.GO.addImage(this.GOimg)
        this.level1Group.add(this.GO)

        this.retry = createSprite(this.w / 2, this.h / 1.6, 20, 20)
        this.retryImg = loadImage("lvl1/retry.png")
        this.retry.addImage(this.retryImg)
        this.retry.visible = false
        this.retry.scale = 0.4
        this.level1Group.add(this.retry)

        this.pointer = createSprite(50, this.h / 1.3, 20, 20)
        this.pImg = loadImage("lvl1/pointer.png")
        this.pointer.addImage(this.pImg)
        this.pointer.visible = false
        this.level1Group.add(this.pointer)

        this.dislayGO = false

        this.ob1 = createSprite(760, this.h / 1.15, 50, 50)
        this.ob2 = createSprite(980, 760, 50, 50)
        this.ob3 = createSprite(1195, 760, 50, 50)
        this.ob4 = createSprite(1300, 760, 50, 50)
        this.ob5 = createSprite(1810, 760, 50, 50)
        this.ob6 = createSprite(2120, 775, 460, 50)
        this.ob7 = createSprite(2850, 775, 970, 50)
        this.ob8 = createSprite(3565, 610, 40, 40)
        this.ob9 = createSprite(3990, 418, 40, 40)

        this.level1Group.add(this.ob1, this.ob2, this.ob3, this.ob4, this.ob5, this.ob6, this.ob7, this.ob8, this.ob9)

        this.ob1.visible = false
        this.ob2.visible = false
        this.ob3.visible = false
        this.ob4.visible = false
        this.ob5.visible = false
        this.ob6.visible = false
        this.ob7.visible = false
        this.ob8.visible = false
        this.ob9.visible = false


        obgroup.add(this.ob1)
        obgroup.add(this.ob2)
        obgroup.add(this.ob3)
        obgroup.add(this.ob4)
        obgroup.add(this.ob5)
        obgroup.add(this.ob6)
        obgroup.add(this.ob7)
        obgroup.add(this.ob8)
        obgroup.add(this.ob9)

        
        this.lImg = loadImage("left.png")
        this.leftMove = createSprite(60, 780, 90, 90)
        this.l1x = this.leftMove.x - this.leftMove.width / 2
        this.l2x = this.leftMove.x + this.leftMove.width / 2
        this.l1y = this.leftMove.y - this.leftMove.height / 2
        this.l2y = this.leftMove.y + this.leftMove.height / 2
        this.leftMove.addImage(this.lImg)
        this.level1Group.add(this.leftMove)
        

        this.rImg = loadImage("right.png")
        this.rightMove = createSprite(160, 780, 90, 90)
        this.r1x = this.rightMove.x - this.rightMove.width / 2
        this.r2x = this.rightMove.x + this.rightMove.width / 2
        this.r1y = this.rightMove.y - this.rightMove.height / 2
        this.r2y = this.rightMove.y + this.rightMove.height / 2
        this.rightMove.addImage(this.rImg)
        this.level1Group.add(this.rightMove)
        

        this.jImg = loadImage("up.png")
        this.jumpMove = createSprite(this.w / 2 + this.camX / 2.2, 780, 90, 90)
        this.u1x = this.jumpMove.x - this.jumpMove.width / 2
        this.u2x = this.jumpMove.x + this.jumpMove.width / 2
        this.u1y = this.jumpMove.y - this.jumpMove.height / 2
        this.u2y = this.jumpMove.y + this.jumpMove.height / 2
        this.jumpMove.addImage(this.jImg)
        this.level1Group.add(this.jumpMove)         

        // this.pauze = createSprite(this.w / 1.03, this.h / 18, 50, 50)
        // this.pauzeUp = loadImage("lvl1/pauzeUp.png")
        // this.pauze.addImage(this.pauzeUp)
        // this.pauze.scale = 1.2
        // this.level1Group.add(this.pauze)

        

        this.passed = false

        this.lSprite = createSprite(this.w / 2.5, this.h / 1.55, 70, 50)
        this.rSprite = createSprite(this.w / 1.7, this.h / 1.55, 70, 50)
        this.lSprite.visible = false
        this.rSprite.visible = false
        this.level1Group.add(this.rSprite, this.lSpite)

        this.checkAnimation = false

        camera.position.x = displayWidth / 2
        camera.position.y = windowHeight / 2


        this.portal = createSprite(4180, 315, 20, 20)
        this.portal.scale = 0.3
        this.portalAni = loadAnimation("portal/0.png", "portal/1.png", "portal/2.png", "portal/3.png", "portal/4.png", "portal/5.png", "portal/6.png", "portal/7.png")
        this.portal.addAnimation("looping", this.portalAni)
        this.portal.animation.frameDelay = 1
        this.level1Group.add(this.portal)
        this.portal.depth = 1
        this.portal.setCollider("circle", 0, 0, 30)

        


        // this.pauzeSwitch = false

        // this.pauzeScreen = createSprite(camera.position.x, camera.position.y, displayWidth, this.h)
        // this.pauzeScreen.shapeColor = 'rgba(10, 10, 10, 0.7)'
        // this.pauzeScreen.visible = false
        // this.pauzeScreen.depth = 20

        this.pauzed = false

        
        
        // this.pauzeMImg = loadImage("PauzeMenu.png")
        // this.pauzeMenu = createSprite(displayWidth / 2, windowHeight / 2, this.w / 2.5, this.h / 2.5)
        // this.pauzeMenu.addImage(this.pauzeMImg)
        // this.pauzeMenu.scale = 1.3
        // this.pauzeMenu.visible = false
        // this.pauzeMenu.depth = 21

        // this.resume = createSprite(displayWidth / 2, windowHeight / 1.75, this.w / 7.5294, this.h / 9.4736)
        // this.resumeImg = loadImage("resumeB.png")
        // this.resume.addImage(this.resumeImg)
        // this.resume.visible = false

        // this.home = createSprite(displayWidth / 2.8, windowHeight / 1.75, this.w / 18.2857, this.h / 9.4736)
        // this.homeImg = loadImage("homeB.png")
        // this.home.addImage(this.homeImg)
        // this.home.visible = false

        // this.settings = createSprite(displayWidth / 1.55, windowHeight / 1.75, this.w / 18.2857, this.h / 9.4736)
        // this.settingsImg = loadImage("settingsB.png")
        // this.settings.addImage(this.settingsImg)
        // this.settings.visible = false

        this.showEnd = false
        
    }


    play(){
        // X position is relative to camera.position.x
        this.player.plr.collide(tgroup)
        this.ground.x = camera.position.x
        this.groundCollider.x = camera.position.x
        this.w = camera.position.x  + this.camX / 2
        this.lSprite.x = camera.position.x - this.camX / 10
        this.rSprite.x = camera.position.x + this.camX / 10
        this.leftMove.x = camera.position.x - this.camX / 2.2
        this.rightMove.x = camera.position.x - this.camX / 2.8
        this.jumpMove.x = camera.position.x + this.camX / 2.2
        // this.pauze.x = camera.position.x  + this.camX / 2.13
        // this.pauzeScreen.x = camera.position.x
        // this.resume.x = camera.position.x
        // this.home.x = camera.position.x + this.camX / 2.8 / 2.15
        // this.settings.x = camera.position.x - this.camX / 1.55 / 4
        // this.pauze.x = camera.position.x + this.camX / 1.03 / 2

        this.px = mouseX
        this.py = mouseY



    


        this.player.plr.collide(this.lWall)

        // Death for Dyso(animation)
        if(this.player.plr.isTouching(obgroup)){
            this.player.plr.changeAnimation("death", this.pdeath)
            this.player.plr.animation.play()
            this.checkAnimation = true
            this.player.plr.velocityY = 5
        }

        // Checking death animation
        if(this.checkAnimation){
            if(this.player.plr.animation.getFrame() == this.player.plr.animation.getLastFrame()){
                

                setTimeout(() => {
                    this.gameState = false
                    this.displayGO = true
                    this.player.plr.animation.rewind()
                }, 300)
                
            }
        }

        // portal

        if(this.player.plr.isTouching(this.portal)){
            this.passed = true
        }

        // 


        
    //Bg
    image(this.bgp4, this.bgx4, 0, 4240, this.h)
    image(this.bgp3, this.bgx3, 0, 4240, this.h)
    image(this.bgp2, this.bgx2, 0, 4240, this.h)
    image(this.bgp1, 0, 0, 4240, this.h)
        


        if(this.gameState){

            
            //Game over assets not visible
            this.screen.visible = false
            this.GO.visible = false
            this.retry.visible = false

            


        if(this.storylineBool){


            //Assets visibility
            this.player.plr.visible = false
            this.leftMove.visible = false
            this.rightMove.visible = false
            this.jumpMove.visible = false
            this.storyline.visible = true


            // If tapping once will go through the whole story
            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }
            
            if(touches.length > 0 && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false   
            }

            // if(touches.length == 0){
            //     this.continueStory = true
            // }

            if(keyWentUp(32) && touches.length == 0){
                this.continueStory = true
            }

            this.storyline.addImage(this.storyp1)
            this.storyline.addImage(this.storyp2)
            this.storyline.addImage(this.storyp3)
            this.storyline.addImage(this.storyp4)
            this.storyline.addImage(this.storyp5)
            this.storyline.addImage(this.storyp6)
            this.storyline.addImage(this.storyp7)
    
            // this.storyline.scale = 2.7

            // changing story img
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
                this.storyline.y = this.h / 1.38
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 6){
                this.storyline.visible = false
                this.storylineBool = false
                bgMusic.loop(1, 1, 2, 0)
            }

        }else{
            
            this.gyo1.move(1330, 1785)
            this.gyo2.move(1860, 2360)
            this.gyo3.move(2595, 2815)

            //things are visible again
            this.player.plr.visible = true
            this.leftMove.visible = true
            this.rightMove.visible = true
            this.jumpMove.visible = true

            this.checkAnimation = false
            this.displayGO = false


            // Checking if player touched platform/obstacle collider
            if(collidergroup.isTouching(this.player.plr)){
                this.touchGround = true
            }

            if(this.player.plr.isTouching(obgroup)){
                this.gameState = false
            }
              
              this.gyo1.collision(this.player.plr)
              this.gyo2.collision(this.player.plr)
              this.gyo3.collision(this.player.plr)

            if(this.pauzed == false){

                //visibility for buttons
                this.leftMove.visible = true
                this.rightMove.visible = true
                this.jumpMove.visible = true
                // this.pauzeScreen.visible = false
                

                //keyboard events
                if(keyDown("UP_ARROW") && this.touchGround && this.player.plr.isTouching(tgroup) == false|| keyDown(32) && this.touchGround && this.player.plr.isTouching(tgroup) == false){
                this.player.plr.velocityY = -13
                this.touchGround = false
                this.player.plr.changeAnimation("jump", pjump)

                }else if(keyDown("LEFT_ARROW") || keyDown(65)){
                    this.player.plr.x -= 6
                    this.player.plr.changeAnimation("run", panimation)
                    this.player.plr.mirrorX(-1)
                    camera.position.x -= this.leftcameraPlus
                    if(this.leftcameraPlus !== 0){
                        this.bgx2 -= this.leftcameraPlus + 1
                        this.bgx3 -= this.leftcameraPlus + 2
                        this.bgx4 -= this.leftcameraPlus + 3
                    }
                }else if(keyDown("RIGHT_ARROW") || keyDown(68)){
                    this.player.plr.x += 6
                    this.player.plr.changeAnimation("run", panimation)
                    this.player.plr.mirrorX(1)
                    camera.position.x += this.cameraPlus
                    if(this.cameraPlus !== 0){
                        this.bgx2 += this.cameraPlus - 1
                        this.bgx3 += this.cameraPlus - 2
                        this.bgx4 += this.cameraPlus - 3
                    }
                }else if(touches.length == 0){
                    this.player.plr.changeAnimation("idle", pidle)
                    this.player.plr.setCollider("rectangle", 0, 0, 15, 35)
                }
                //touch events
                if(touches.length == 1 || touches.length == 2){
                    for(let touch of touches){

                        if(touch.x > this.l1x && touch.x < this.l2x && touch.y > this.l1y && touch.y < this.l2y){
                            this.player.plr.x -= 6
                            this.player.plr.changeAnimation("run", panimation)
                            this.player.plr.mirrorX(-1)
                            this.player.plr.setCollider("rectangle", 0, 0, 30, 30)
                            camera.position.x -= this.leftcameraPlus
                            if(this.leftcameraPlus !== 0){
                                this.bgx2 -= this.leftcameraPlus + 1
                                this.bgx3 -= this.leftcameraPlus + 2
                                this.bgx4 -= this.leftcameraPlus + 3
                            }
                        }else if(touch.x > this.r1x && touch.x < this.r2x && touch.y > this.r1y && touch.y < this.r2y){
                            this.player.plr.x += 6
                            this.player.plr.changeAnimation("run", panimation)
                            this.player.plr.mirrorX(1)
                            this.player.plr.setCollider("rectangle", 0, 0, 30, 30)
                            camera.position.x += this.cameraPlus
                            if(this.cameraPlus !== 0){
                                this.bgx2 += this.cameraPlus - 1
                                this.bgx3 += this.cameraPlus - 2
                                this.bgx4 += this.cameraPlus - 3
                            }
                        }else if(touch.x > this.u1x && touch.x < this.u2x && touch.y > this.u1y && touch.y < this.u2y  && this.touchGround && this.player.plr.isTouching(tgroup) == false){
                            this.player.plr.velocityY = -13
                            this.touchGround = false
                            this.player.plr.changeAnimation("jump", pjump)
                        }else if(touches.length == 0){
                            this.player.plr.changeAnimation("idle", pidle)
                            this.player.plr.setCollider("rectangle", 0, 0, 20, 30)
                        }

                        // if(touch.x > this.pauze.x - this.pauze.width / 2 && touch.x < this.pauze.x + this.pauze.width && touch.y > this.pauze.y - this.pauze.height && touch.y < this.pauze.y + this.pauze.height){
                        //     this.pauzed = true
                    	//     this.pauze.visible = false
                        // }
                    }
                }
            }


            // if(spriteTouched(this.pauze, 50, 50) || mousePressedOver(this.pauze)){
            //     this.pauzed = true
            //     this.pauze.visible = false
            // }



            // //pauze menu
            // if(this.pauzed){
            //     this.pauzeMenu.visible = true
            //     this.leftcameraPlus = 0
            //     this.cameraPlus = 0
            //     this.player.plr.velocityY = 0
            //     this.player.plr.pause()

            //     this.gyo1.gyo.velocityX = 0
            //     this.gyo2.gyo.velocityX = 0
            //     this.gyo3.gyo.velocityX = 0
            //     this.gyo1.gyo.pause()
            //     this.gyo2.gyo.pause()
            //     this.gyo3.gyo.pause()

            //     this.leftMove.visible = false
            //     this.rightMove.visible = false
            //     this.jumpMove.visible = false
            //     this.pauzeScreen.visible = true
            //     this.resume.visible = true
            //     this.settings.visible = true
            //     this.home.visible = true

            //     this.player.plr.depth = 19

            //     if(spriteTouched(this.resume, this.w / 7.5294, this.h / 9.4736)){
            //         this.pauzed = false

            //         this.pauzeMenu.visible = false
            //         this.player.plr.play()

            //         this.gyo1.gyo.play()
            //         this.gyo2.gyo.play()
            //         this.gyo3.gyo.play()
            //         this.gyo1.gyo.move()
            //         this.gyo2.gyo.move()
            //         this.gyo3.gyo.move()
                    

            //         this.leftMove.visible = true
            //         this.rightMove.visible = true
            //         this.jumpMove.visible = true
            //         this.pauzeScreen.visible = false
            //         this.resume.visible = false
            //         this.settings.visible = false
            //         this.home.visible = false

            //         this.pauze.visible = true
            //     }
                
                
            // }


            
            // Jump animation
            if(this.touchGround != true){
               this.player.plr.changeAnimation("jump", pjump)
            }
            
            //gravity
            if(this.pauzed == false){
                this.player.plr.velocityY = this.player.plr.velocityY + 0.8
            }
            

            // moving camera
            if(this.player.plr.x > camera.position.x - 10){
                this.cameraPlus = 6
            }else if(this.player.plr.x < camera.position.x){
                this.cameraPlus = 0
            }

            if(this.player.plr.x > displayWidth * 2.8){
                this.cameraPlus = 0
            }


            if(this.player.plr.x > camera.position.x - displayWidth / 4){
                this.leftcameraPlus = 0
            }else if(this.player.plr.x <= camera.position.x - displayWidth / 4 && this.player.plr.isTouching(this.leftCollider) == false){
                this.leftcameraPlus = 6
            }else if(this.player.plr.isTouching(this.leftCollider)){
                this.leftcameraPlus = 0
            }
             

            //text instructions

                if(this.player.plr.x > 0){
                    push()
                    tint(255, this.moveInVis)
                    image(this.moveInstruct, displayWidth / 50, this.h / 1.5, displayWidth / 8.5, this.h / 36)
                    this.moveInVis += 4
                    pop()
                }  

                if(this.player.plr.x > this.w / 3){
                    push()
                    tint(255, this.jumpInVis)
                    image(this.jumpInstruct, displayWidth / 2.3, this.h / 1.5, displayWidth / 6.4, this.h / 36)
                    this.jumpInVis += 4
                    pop()
                }else{
                    this.jumpInVis = 0
                }         
            }

        }else if(this.gameState == false){

        // Dyso Death

        //sprites at correct X
        this.GO.x = camera.position.x
        this.retry.x = camera.position.x
        this.screen.x = camera.position.x

            var changePressed = true


            if(this.displayGO && this.gameState == false){
                bgMusic.stop()
                //Game over assets visibility
                this.screen.visible = true
                this.GO.visible = true
                this.retry.visible = true
                this.leftMove.visible = false
                this.rightMove.visible = false
                this.jumpMove.visible = false

                

                if(mousePressedOver(this.lSprite)){
                    //play again 
                    this.gameState = true
                    camera.position.x = this.camX / 2
                    this.player.plr.x = 50
                    this.player.plr.y = 530

                    this.screen.visible = false
                    this.GO.visible = false
                    this.retry.visible = false

                    this.lSprite.visible = false
                    this.rSprite.visible = false

                    this.moveInVis = 0

                    this.gyo1.move(1150, 1500)
                    this.gyo1.startOver()

                    this.gyo2.move(1600, 2000)
                    this.gyo2.startOver()

                    this.gyo3.move(2595, 2815)
                    this.gyo3.startOver

                    this.player.plr.animation.goToFrame(0)


                    camera.position.x = displayWidth / 2
                    camera.position.y = windowHeight / 2

                    this.bgx2 = 0
                    this.bgx3 = 0
                    this.bgx4 = 0
                    
                    bgMusic.loop(1, 1, 2, 0)
                    
                }else if(mousePressedOver(this.rSprite)){
                    menu.levelState = 0
                }
            }
        }
    }

    end(){
        if(this.passed){
            // if passed go to next screen
            
            this.player.plr.x = 4180
            this.player.plr.y = 325

            this.player.plr.scale -= 0.03
                
            if(this.player.plr.scale < 0){
                levelState = 2
                this.level1Group.destroyEach()
                bgMusic.stop()
               this.gameState = false
               camera.position.x = displayWidth / 2
            }

            setTimeout( ()=> {
                this.showEnd = true
            }, 1000)
            
            if(this.showEnd){
                image(endImg, 0, 0, displayWidth, displayHeight)
            }
        }
    }
        
}

 
//Touch function to make things easier

function w(num){
    return num * (width / basew)
}

function h(num){
    return num * (height / baseh)
}




