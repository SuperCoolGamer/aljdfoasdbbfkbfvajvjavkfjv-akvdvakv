function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();


}




function draw() {
    image(video,230,150,220,200);

    circle(150, 70, 100);
    circle(520,70,100)
    circle(150,370,100)
    circle(520,370,100)
        fill(0,369,0)
      stroke(55,128,249);
      
   
      
      rect(185, 45,300, 55, 10);
        rect(495, 75,55, 300, 10);
       rect(185, 340,300, 55, 10);
      
      rect(120, 75,55, 300, 10);
    
       
    
    }



function take_snapshot(){
    save('student_name.png')
}