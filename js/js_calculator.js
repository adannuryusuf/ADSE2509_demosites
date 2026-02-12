// Js file to demonstrate the various js operators and switch case 
// construct to create a simple calc
//create a functio n to hamdle te calc
function calculate()
{
    //constants to hold the number entered by the user and the operation selexted
    const num1 = parseInt(document.getElementById('txtFirstNum').value);
    const num2 = parseInt(document.getElementById('txtSecondNum').value);
    const operation = parseInt(document.getElementById('txtsltOperation').value);

    let result = "";
    switch(ooperation)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/"://handle when num2 is 0 for robustness
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = num1 ** num2; // same as math.pow
            break;
        default:
            alert("Please select add ,subtract, multiply divide modulus power");
            result = "";
            break;
    }
    // display the result in the answer text field
    document.getElementById('txtAnswer').value = result;
}