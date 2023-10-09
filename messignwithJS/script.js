
let mainHeadingFunc = document.getElementById("mainHeading")

let x = 1;
let y = 0;

let switcher = true;


// camel case upper and lower

// function funcMain(){
//     mainHeadingFunc.innerHTML = "Suii";
//     mainHeadingFunc.style.color = "#786296";
// }
function incriment(){
    document.getElementById("incrmenter").innerHTML = x;
    x =x+1;
}
function decrmenter(){
    document.getElementById("decrmenter").innerHTML = y;
    y =y-1;
}

// triple equalto and double equal to
function onOff(){
    if(switcher === true){
    mainHeadingFunc.innerHTML = "Suii";
    mainHeadingFunc.style.color = "#786296";  
    // switcher = false
    }
    else{
        mainHeadingFunc.innerHTML = "✨";
        mainHeadingFunc.style.color = "#786254"; 
        // switcher = true 
    }
    switcher = !switcher;
}
