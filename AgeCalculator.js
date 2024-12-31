let disBlock = document.getElementById('disBlock');
let age = document.getElementById('age');
let time = document.getElementById('time');
let dobDate = document.getElementById('dobDate');
let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');

disBlock.style.display = 'none';

function samay(){
    let d = new Date();
    time.innerHTML =  d.getHours() + " hour, " + d.getMinutes() + " minutes, " + d.getSeconds() + " seconds old";
}

function calculate() {
    disBlock.style.display = 'block';
    let dobVal = dobDate.value;

    if (!dobVal) {
        alert('Please enter your date of birth');
        return;
    }

    let dob = new Date(dobVal);
    let today = new Date();
    let year = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();

    // Adjust for negative months or days
    if (month < 0) {
        month += 12;
        year--;
    }

    if (day < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        day += lastMonth.getDate();
        month--;
    }

    age.innerHTML = `Sandeep madarchod is  <br> ${year} years, ${month} months, ${day} days old.`;
}

// Start the time update
setInterval(samay, 1000);

calcBtn.onclick = calculate;

function reset() {
    age.innerHTML = "";
    time.innerHTML = "";
    disBlock.style.display = 'none';
    dobDate.value = "";
}

resetBtn.onclick = reset;
