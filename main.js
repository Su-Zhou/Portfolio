console.log('Hello, World!');


document.addEventListener ("DOMContentLoaded", function() { /*footer*/
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
});


function AlertFunction() {
    alert('Just Kidding! Use the functioning back to top arrow that has been following your journey down this website!')
}

function hoverbuttonON() {
    document.getElementById("backtoTOP").innerHTML = "GOTCHA HAHA!"
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

    //if else text color changes
    if (sumvalue % 2 === 0) {
        totalClicks.classList.add('even');
        totalClicks.classList.remove('odd'); // Remove the 'odd' class if it exists
    } else {
        totalClicks.classList.add('odd');
        totalClicks.classList.remove('even'); // Remove the 'even' class if it exists
    }
}

















