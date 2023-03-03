
// alert button
function alertOnButton() {
alert("You have submitted!")
}

        
// find largets number
function largestNumber() {
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

alert("The largest number is " + largest);
}


// http request
function httpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.weather.gov/gridpoints/TOP/39,84/forecast");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
      } 
      
      else {
        console.log(`Error: ${xhr.status}`);
      }
    };  
}



// program to check if the string is palindrome or not
function checkPalindrome() {
  const string = prompt('Enter a string: ');

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      alert('Is a palindrome');
  }
  else {
      alert('Not a palindrome');
  }
}




function getFiles() {
  const directory = './files/';
  const path = require('path');
  const fs = require('fs');

  fs.readdirSync(directory).forEach(file => {
    if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
}



function asynchronoushttp() {
  //asynchronous http request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.weather.gov/gridpoints/TOP/39,84/forecast", true);
  xhr.onload = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = (e) => {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}
