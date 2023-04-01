// console.log(document)

// var heading = document.getElementById("heading")


// function setHeading() {
//     console.log("setHeading call")

//     heading.innerHTML = "Number is even or odd"
// }


function evenOdd() {
    var input = document.getElementById("number")
    var pera = document.getElementById("pera")

    if(input.value % 2 == 0){
        pera.innerHTML = "number is even"
    }

    else{
        pera.innerHTML = "number is odd"
    }
}