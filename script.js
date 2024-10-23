function fn0(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 0;
}
function fn1(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 1;
}
function fn2(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 2;
}
function fn3(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 3;
}
function fn4(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 4;
}
function fn5(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 5;
}
function fn6(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 6;
}
function fn7(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 7;
}
function fn8(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 8;
}
function fn9(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 9;
}
function feraser(){
    let previouse = document.getElementById("display").innerHTML;
    let eraser = previouse.slice(0, -1)
    document.getElementById("display").innerHTML = eraser
}

let firstSave;
let op;
let historyList = document.getElementById("historyList");

function fn(value) {
    let display = document.getElementById("display");

    if (value === '.') {
        let parts = display.value.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];

        if (lastPart.includes('.')) return;
    }

    display.value += value;
}

function feraser() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function eq() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;

        addToHistory(`${expression} = ${result}`);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

function modulus() {
    let expression = document.getElementById("display").value;
    let result = eval(expression) / 100;
    document.getElementById("display").value = result;

    addToHistory(`${expression} % = ${result}`);
}

function toggleHistory() {
    const historySection = document.getElementById("history");
    if (historySection.style.display === "none" || historySection.style.display === "") {
        historySection.style.display = "block";
    } else {
        historySection.style.display = "none";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    document.querySelector('.calculator').classList.toggle('dark');
    document.querySelector('h1').classList.toggle('dark');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('dark');
    });

    const display = document.getElementById("display");
    display.classList.toggle('dark');

    const modeButtonImage = document.querySelector('.mode img');
    if (document.body.classList.contains('dark')) {
        modeButtonImage.src = 'assets/images/img_5.png';
    } else {
        modeButtonImage.src = 'assets/images/img.png';
    }
}

document.getElementById("history").style.display = "none";


