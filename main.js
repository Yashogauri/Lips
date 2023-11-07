nosex=0
nosey=0
function preload(){
    lip=loadImage('https://i.postimg.cc/brbBzVvr/lip.png')
}
function setup(){
    canvas=createCanvas(850,600)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(700,600)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose', gotposes)
}
function gotposes(results){
   if (results.length>0){
    console.log(results)
    nosex=results[0].pose.nose.x+33
    nosey=results[0].pose.nose.y-5
   }
}
function draw(){
    image(video,0,0,850,600)
    image(lip,nosex,nosey,100,70)
}
function snap(){
    save('lips.png')
}
function modelloaded(){
    console.log("Model is loaded")
}