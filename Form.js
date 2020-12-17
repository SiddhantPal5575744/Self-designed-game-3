class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Begin');
      this.greeting = createElement('h2');
     // this.title = createElement('h1');
      this.request=createElement('h2');
      this.intromine = createElement('h2');
      this.mine1 = createElement('h2');
      this.danger1 = createElement('h2');
      this.intohole = createElement('h2');
      
    
      //this.background=loadImage("Volcano.png");
      this.name=null;
   
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
     // this.title.hide();
      this.request.hide();
      this.intromine.hide();
   
    }
  
    display(){
        background(volcanoImg);
       
      //  image(this.background,displayWidth/2,displayHeight/2,10,10)
     // this.title.html("Journey to the center of the Earth");
      this.request.html("Please enter your name");

    //  this.title.position(displayWidth/2 -200, 50);
      this.request.position(displayWidth/2 -50, 200);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.intromine.html("Robot:  You might be wondering what just happened, we actually teleported at octradedalisis diamond mine which will the starting  point on our journey to the center of the earth I hope we will have a lot of fun! ")
     this.intromine.position( displayWidth/2-200,displayHeight/2-200);
     this.intromine.hide();

     this.mine1.html( "Robot:Wow this is a beatiful place and look what there are diamonds all around!")
     this.mine1.position(displayWidth/2 - 300, displayHeight/4);
     this.mine1.hide();

     this.danger1.html("Robot: Oh no this is a landslide save yourself from the rocks or you will be killed!,use the arrow keys to move")
     this.danger1.position(displayWidth/2 - 300, displayHeight/4);
     this.danger1.hide();

     this.intohole.html("Robot:Thankfully we were saved now go to the right to continue our journey");
     this.intohole.position(displayWidth/2 - 300, displayHeight/4);
     this.intohole.hide();
 
      

  2
      this.button.mousePressed(()=>{
      this.input.hide();
        gamestate="lobby";
        this.button.hide();
      //  this.title.hide();
        this.request.hide();
        this.name = this.input.value();
       
        this.greeting.html("Hello " + this.name+" I am Robotechnosis a robot made by Professor Chemicalo Scienceman. I will be your guide in our Journey To the Centre of the Earth. In our journey there will be times when you have to make choices, but fast. A wrong choice may kill you though you will be revived from checkpoints.Press SPACE to start")
        this.greeting.position(displayWidth/2 - 300, displayHeight/4);

    

       
       
       // var name=this.name;
      });
      if(gamestate==="character pick"){
        this.greeting.hide();
      }

      if(gamestate==="mineEntrance"){
        this.intromine.show();
      }

      
      if(gamestate==="insidemine"){
        this.mine1.show();
      }

      if(gamestate==="landslide"){
        this.danger1.show();
      }

      if(gamestate==="inHole"){
        this.intohole.show();
      }
  
       
  
    }

    
  }
  