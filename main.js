nose_x="";
nose_y="";
function preload()
{
  clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup()
{
  canvas =  createCanvas(400,300);
  canvas.center();
  webcam = createCapture(VIDEO);
  webcam.size(400,300);
  webcam.hide()

  poseNet = ml5.poseNet(webcam,modelloded);
  poseNet.on("pose",gotPoses);
}
function modelloded()
{
  console.log("posenet loded");
}

function draw()
{
  image(webcam,0,0,400,300);
  image(clown_nose,nose_x-20,nose_y-30,50,50)
}

function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
  }
}
function take_snapshot()
{
  save("battle_of_pashendaile.png")
}
