console.log('Hello, World!');



document.addEventListener ("DOMContentLoaded", function() { /*footer*/
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
});


function AlertFunction() { /*alert thing */
    alert('Just Kidding! Use the functioning back to top arrow that has been following your journey down this website! Also check out my latest favourite song from a game I play. It is basically lovecraftian disney musical https://www.youtube.com/watch?v=pWU3RKBSGx8')
}


function hoverbuttonON() { /*hover button */
    document.getElementById("backtoTOP").innerHTML = "GOTCHA HAHA!"
}
function hoverbuttonOFF() {
    document.getElementById("backtoTOP").innerHTML = "Back to Top"
}



function totalClick(click) {  /*incrementing button, decreasing button, reset button and the if-else colour change */
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;

    // avoiding negatives
    if (sumvalue < 0) {
        totalClicks.innerText = 0;
    } else {
        totalClicks.innerText = sumvalue;
    }

    // reset value part
    if (click === 0) {
        totalClicks.innerText = 0;
    }
    console.log(totalClicks.innerText);

    //if else text color changes depending if OOD or EVEN
    if (sumvalue % 2 === 0) {
        totalClicks.classList.add('even');
        totalClicks.classList.remove('odd'); 
    } else {
        totalClicks.classList.add('odd');
        totalClicks.classList.remove('even'); 
    }
}




document.addEventListener('DOMContentLoaded', function() { /*looping*/
    const numbersList = document.getElementById('numbers');
    const initialValue = 1;
    const stopValue = 100;
  
    for (let i = initialValue; i <= stopValue; i++) {
      const listItem = document.createElement('li');

      listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';

      numbersList.appendChild(listItem);
    }
  });
  
  
















