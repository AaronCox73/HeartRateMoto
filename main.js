// Zone 1	Very light	50–60%
// Zone 2	Light	60–70%
// Zone 3	Moderate	70–80%
// Zone 4	Hard	80–90%
// Zone 5	Maximum	90–100%

let submit = document.getElementById('submitBtn')
let postEstimatedMaxHR = document.getElementById('estimatedHR')

submit.addEventListener('click', function () {
    let userAge = document.getElementById('userAge').value
    let estimatedMaxHR = (220 - userAge)
    postEstimatedMaxHR.innerHTML = estimatedMaxHR
    localStorage.setItem('EstimatedMXHR', estimatedMaxHR)
})

let estimatedMaxHR = localStorage.getItem('EstimatedMXHR')


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

usersHRZones(150)