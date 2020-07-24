//alert ('hello');
let greetings='World';
//alert(greetings);
const message='hello ' + greetings;
alert (message);

const userAge = parseFloat(prompt('Enter your age'));
if (userAge<18){
    alert ('You are underaged');
}
    alert ('You are adult');

const nextAge=add(userAge, 1);
alert(nextAge);

function add(a,b){
    const result = a + b;
    return result;
}