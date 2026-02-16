//js file to illustratr hoe to draw a line on an html canvas
// function to be called when the document loads
window.onload = function()
{
    //get a reference to the canvas on the html document
    let docCanvas = document.getElementById('myCanvas');
    let myContext = docCanvas.getContext('2d');
    //set up and draw the diagonal white broad line
    myContext.beginPath();
    myContext.moveTo(50, 100);
    myContext.lineTo(250,50);
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();

}