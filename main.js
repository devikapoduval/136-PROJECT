 status=""
 objects_name=""
 function setup(){
     canvas=createCanvas(400,300)
     canvas.center()
     video=createCapture(VIDEO)
     video.size(400,300)
     video.hide()
 }

 function start(){
     objectDetector=ml5.objectDetector("cocossd",modelLoaded)
     document.getElementById("status").innerHTML="Status=Detecting Objects"
    objects_name= document.getElementById("object_name").value
 }


 function modelLoaded(){
     status=true
     console.log("model loaded")
 }


 function draw()
{
    image(video,0,0,400,300)
}
