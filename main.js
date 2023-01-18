// get access to submit button 
let submit = document.getElementById('submitBtn')
// get access to h2 for posting their heart rate
let postEstimatedMaxHR = document.getElementById('estimatedHR')

// getting access to local storage that was set up on function line 15
let estimatedMaxHR = localStorage.getItem('EstimatedMXHR')

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let curretZone = document.getElementById('currentZone')

// function to get their estimated heart rate
submit.addEventListener('click', function () {
    let userAge = document.getElementById('userAge').value
    let estimatedMaxHR = Math.round((208 - (.7 * userAge)))
    postEstimatedMaxHR.innerHTML = estimatedMaxHR + ' BPM'

    let slider = document.getElementById("myRange");
    slider.max = estimatedMaxHR
    // add user's heart rate to local storge so we can access it later on a global scope
    localStorage.setItem('EstimatedMXHR', estimatedMaxHR)
})

// function that will allow us to know what HR zone the user is in
function usersHRZones(currentHR) {
    // Zone 1	Very light	50–60%
    // Zone 2	Light	60–70%
    // Zone 3	Moderate	70–80%
    // Zone 4	Hard	80–90%
    // Zone 5	Maximum	90–100%
    if (currentHR <= (estimatedMaxHR * .6)) {
        curretZone.innerHTML = 'Zone 1'
    } else if (currentHR <= (estimatedMaxHR * .7)) {
        curretZone.innerHTML = 'Zone 2'
    } else if (currentHR <= (estimatedMaxHR * .8)) {
        curretZone.innerHTML = 'Zone 3'
    } else if (currentHR <= (estimatedMaxHR * .9)) {
        curretZone.innerHTML = 'Zone 4'
    } else {
        curretZone.innerHTML = 'Zone 5'
    }
}



output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener('mouseup', (e) => {
    usersHRZones(slider.value)
});