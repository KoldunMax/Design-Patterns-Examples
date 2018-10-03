class Coffee {
  constructor(cost) {
    this.cost = cost
  }
  
  setCost(value) {
    this.cost = value
  }
  getCost() {
    return this.cost
  }
}

let coffee = new Coffee(5)

let aS = function addingSugar() {
  let costCoffee = coffee.getCost()
  let costSugar = 2
  let costCoffeeAndSugar = costCoffee + costSugar
  coffee.setCost(costCoffeeAndSugar)
}

aS()
console.log(coffee.getCost())

function checkNumber(value) {
  return typeof value == 'number';
}

// Example with functions below

function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        console.log( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

sum = typeCheck(sum, [checkNumber, checkNumber]);

console.log(sum(1, 2));

console.log(sum(true, null));
console.log(sum(1, ["array", "in", "sum?!?"])); 