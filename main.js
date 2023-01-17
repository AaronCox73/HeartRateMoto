// get access to submit button 
let submit = document.getElementById('submitBtn')
// get access to h2 for posting their heart rate
let postEstimatedMaxHR = document.getElementById('estimatedHR')

// getting access to local storage that was set up on function line 15
let estimatedMaxHR = localStorage.getItem('EstimatedMXHR')


// function to get their estimated heart rate
submit.addEventListener('click', function () {
    let userAge = document.getElementById('userAge').value
    let estimatedMaxHR = Math.round((208 - (.7 * userAge)))
    postEstimatedMaxHR.innerHTML = estimatedMaxHR + ' BPM'
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
        console.log('Zone 1')
    } else if (currentHR <= (estimatedMaxHR * .7)) {
        console.log('Zone 2')
    } else if (currentHR <= (estimatedMaxHR * .8)) {
        console.log('Zone 3')
    } else if (currentHR <= (estimatedMaxHR * .9)) {
        console.log('Zone 4')
    } else {
        console.log('Zone 5')
    }

}

usersHRZones(175)