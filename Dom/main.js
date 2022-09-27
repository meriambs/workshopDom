var test = document.getElementsByClassName("exemple");
var querytest = document.querySelector(".exemple");
var testall = document.querySelectorAll(".exemple");


console.log(test,"test");
console.log(querytest,"querytest");
console.log(testall,"testall");

for (let i = 0; i < testall.length; i++) {
    testall[i].style.backgroundColor = "red";
}

// querytest.style.backgroundColor = "red";
