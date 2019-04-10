const add = (num1, num2) => {
    return num1*1 + num2*1;  //converts from string to number
};

const subtract = (num1, num2) => {
    return num1*1 - num2*1;  //converts from string to number
};

const multiply = (num1, num2) => {
    return num1 * num2;  //converts from string to number
};

const divide = (num1, num2) => {
    return num1 / num2;  //converts from string to number
};


export default { add, subtract, multiply, divide };