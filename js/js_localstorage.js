//js 
let localStorage = "";
function storeDetails(event)
{
    event.preventDefault();
    const username = document.getElementById(txtusername).value;
    const useremail = document.getElementById(txtEmail).value;

    localStorage.setItem('username',name);
    localStorage.setItem('email',email);
    window.location.href = 'js-localstorage.html';
}
function deleteDetails()
{
    localStorage.removeItem('username');
    localStorage.removeItem('email');

}
function printLocalStorage()
{
    let contentDiv = document.getElementById('contentDiv');

    if(('localStorage' in window) && window['localStorage']!== null)
    {
        if(localStorage.getItem('username') !== null && localStorage.getItem('email') !== null)
        {
            let username = localStorage.getItem('username');
            let useremail= localStorage.getItem('email');
            localStorageDetails += `<p>User&rsquo;s Name: <b>${username}<b><br>Email Address:${useremail}</p>`;

        }
        else
           localStorage+= `<p> The username and email address have been cleared or were not set</p>`;
    }
    else
        alert("Sorry your browser doesnt support local storage/nPlease try a newer version or switch to a different browser.");
}
document.addEventListener("DOMContentLoaded",
    function()
    {
        if(document.getElementById('contentDiv'))
            printLocalStorage();
    }
);