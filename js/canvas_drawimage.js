//js file to illustratr hoe to draw a arc on an html canvas
// function to be called when the document loads
window.onload = function()
{
    //get a reference to the canvas on the html document
    let docCanvas = document.getElementById('myCanvas');
    let myContext = docCanvas.getContext('2d');
    //set up and draw the Text
    myContext.beginPath();
    //choose the font family
    myContext.font = "28pt Verdana";
    myContext.lineWidth = 2;
    myContext.fillStyle = "#fff";
    myContext.strokeStyle = "#00b0f0";
    myContext.strokeText("HTML5 Canvas",20,85);
    myContext.fillText("HTML5 Canvas",20,85);
}