function multiply() {
    var input = document.getElementById("yourNumber").value;
    for (var i = 1; i <= 12; i++) {
        // console.log(input * i);
        var result = input * i;
        showTable.innerHTML += `<table><tr><td>${input} x ${i} = ${result}</td></tr></table>`;
        document.getElementById("yourNumber").value = "";
        // showTable.innerHTML = "";
    }
}

function divide() {
    var input = document.getElementById("yourNumber").value;
    for (var i = 1; i <= 12; i++) {
        // console.log(input * i);
        var result = input / i;
        showTable.innerHTML += `<table><tr><td>${input} / ${i} = ${result}</td></tr></table>`;
        document.getElementById("yourNumber").value = ""
        // showTable.innerHTML = "";
    }
}

function add() {
    var input = Number(document.getElementById("yourNumber").value);
    for (var i = 1; i <= 12; i++) {
        // console.log(input * i);
        var result = input + i;
        showTable.innerHTML += `<table><tr><td>${input} + ${i} = ${result}</td></tr></table>`;
        document.getElementById("yourNumber").value = ""
        // showTable.innerHTML = "";
    }
}

function subtract() {
    var input = document.getElementById("yourNumber").value;
    for (var i = 1; i <= 12; i++) {
        // console.log(input * i);
        var result = input - i;
        showTable.innerHTML += `<table><tr><td>${input} - ${i} = ${result}</td></tr></table>`;
        document.getElementById("yourNumber").value = ""
        // showTable.innerHTML = "";
    }
}