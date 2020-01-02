// Constructor Function

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress.");
    }
}

// crear objeto de HouseKeeper

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper(3, "Ana", ["bathroom"]);

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2; // 9 divided by 0 = infinity
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}