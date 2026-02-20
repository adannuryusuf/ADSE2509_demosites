//js file to illustratr hoe to draw a arc on an html canvas
// function to be called when the document loads
window.onload = function()
{
    //get a reference to the canvas on the html document
    let docCanvas = document.getElementById('myCanvas');
    let myContext = docCanvas.getContext('2d');
    //set up and draw the diagonal white broad line
    myContext.beginPath();
    //set the rect height and width
    myContext.rect(10,40,200,100);
    myContext.lineWidth = 5;
    myContext.fillStyle = "#fff"
    myContext.fill();
    myContext.strokeStyle = "#00b0f0";
    myContext.stroke();
}