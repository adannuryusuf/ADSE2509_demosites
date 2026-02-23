//js file to illustratr how to drag and drop
// function to be called when the document loads
function drag_image(event)
{
    event.dataTransfer.setData('image',event.target.id);
}
function drop_image(event)
{
    let data = event.dataTransfer.getData('image');
    event.target.appendChild(document.getElementById(data));
}
function allow_drop(event)
{
    event.preventDefault();
}