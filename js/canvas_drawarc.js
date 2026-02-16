//js file to illustratr hoe to draw a arc on an html canvas
// function to be called when the document loads
window.onload = function()
{
    //get a reference to the canvas on the html document
    let docCanvas = document.getElementById('myCanvas');
    let myContext = docCanvas.getContext('2d');
    //set up and draw the diagonal white broad line
    //variable to hold the arcs x and y coordinates
    let xCoord = docCanvas.width / 2;
    let yCoord = docCanvas.height / 2;
    //radiu
    let rad = 70;
    //set the start angle and end angle
    let startAngle = Math.PI * .9;
    let endAngle = Math.PI * 1.8;
    //Draw the arc with the above parameters
    myContext.beginPath();
    myContext.arc(xCoord,yCoord,rad,startAngle,endAngle,false);
    myContext.lineWidth = 8;
    myContext.strokeStyle = "#00b0f0";
    myContext.stroke();

}