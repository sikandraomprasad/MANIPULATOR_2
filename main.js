function setup()
{
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas=createCanvas(400,400);
    canvas.position(430,130)

    poseNet= ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}

function modelDone()
{
    console.log("PoseNet Is Initialized And Loaded")
}

function draw()
{
    background("#5196e3")
}

function gotPoses(results,error)
{
    if(error)
    {
    console.error(error);
    }
    if(results.lenght>0)
    {
        console.log(results);

        console.log("rightWrist_x="+results[0].pose.rightWrist.x+"rightWrist_y="+results[0].pose.rightWrisht.y);
        console.log("leftWrist_x="+results[0].pose.leftWrist.x+"leftWrist_y="+results[0].pose.leftWrisht.y)
    }
}