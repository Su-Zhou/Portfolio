console.log('Hello, World!');


document.addEventListener ("DOMContentLoaded", function() { /*footer*/
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
});


function AlertFunction() {
    alert('Just Kidding! Use the functioning back to top arrow that has been following your journey down this website!')
}

function hoverbuttonON() {
    document.getElementById("backtoTOP").innerHTML = "GOTCCHA!"
}
function hoverbuttonOFF() {
    document.getElementById("backtoTOP").innerHTML = "Back to Top"
}



function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;

    // Avoiding negatives
    if (sumvalue < 0) {
        totalClicks.innerText = 0;
    } else {
        totalClicks.innerText = sumvalue;
    }

    // Reset value
    if (click === 0) {
        totalClicks.innerText = 0;
    }
    console.log(totalClicks.innerText);
}

















