img="";
status="";
object=[];
function setup()
{
  
  canvas = createCanvas(500,400);
  canvas.center();
  vdo=createCapture(VIDEO);
  vdo.hide();
  vdo.size(500,400);
  obdec=ml5.objectDetector("cocossd",ml);
  document.getElementById("status").innerHTML="status: Detecting Objects";
  song = loadSound('YRL6BSM-siren.mp3');
}
function draw(){

    image(vdo,0,0,500,400);

    if(status!=""){
      obdec.detect(vdo,gotResult);
      for ( i = 0; i < object.length; i++) {
        pst=floor(object[i].confidence*100);
        text(object[i].label+pst+"%",object[i].x,object[i].y);
    
        r = random(255);
        g = random(225);
        b = random(225); 
        fill(r, g, b );
        pst=floor(object[i].confidence*100);
        text(object[i].label+pst+"%",object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);


    rect(object[i].x,object[i].y,object[i].width,object[i].height);

    if(object[i].label!="person")
    {
      song.play();
      console.log("b i n d");
    }
  
      }
 
    }
}

function ml()
{
console.log("moadelloaded");
status=true;

}
function gotResult(error,results)
{
if(error){
  console.log(error);
}
else{console.log(results);
  object=results;
}
}