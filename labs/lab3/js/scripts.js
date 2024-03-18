/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// function to display users information
let fName , lName, gender, country;

function getInfo(){

    fName = document.getElementById('first_name').value;
    lName = document.getElementById('last_name').value;
    country = document.getElementById('country').value;
    gender = document.getElementById('gender').value;
    

}


function displayInfo(){

    getInfo();

    alert("Hello " + fName + " " + lName + " Welcome,  your country is " + country + " and gender your is " + gender );
}


// questions 
// solved with the assistance of chatGPT https://chat.openai.com/c/040106fd-0ebb-4ca7-b9cc-c726726623a9 
// the use of the preventDefault () is to prevent default behavior associated with a given event

// localStorage.setItem('key', 'value');

//const storedValue = localStorage.getItem('key');

