
function alertOnButton() {
alert("You have submitted!")
}

        

function largestNumber() {
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

alert("The largest number is " + largest);
}



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

