class Pizza {
    
    constructor() {
        this.dough = undefined
        this.sauce = undefined
        this.topping = undefined
    }
    
	setDough(val) {
		this.dough = val;
	};
	setSauce(val) {
		this.sauce = val;
	};
	setTopping(val) {
		this.topping = val;
	};
	
	getDough() {
		return this.dough;
	};
	getSauce() {
		return this.sauce;
	};
	getTopping() {
		return this.topping;
	};
	
	clear() {
		this.setDough(undefined);
		this.setSauce(undefined);
		this.setTopping(undefined);
	};
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }
	
	getPizza() {
		return this.pizza;
  };
  
	createNewPizzaProduct() {
		this.pizza.clear();
	};
	
	buildDough(val) { };
	buildSauce(val) { };
	buildTopping(val) { };
}

class HawaiianPizzaBuilder extends PizzaBuilder {
  constructor() {
    super()
    this.pizza = super.getPizza()
  }
	
	buildDough() { this.pizza.setDough("cross"); };
	buildSauce() { this.pizza.setSauce("mild"); };
	buildTopping() { this.pizza.setTopping("ham+pineapple"); };
}

class SpicyPizzaBuilder extends PizzaBuilder {
  constructor() {
    super()
    this.pizza = super.getPizza()
  }

  buildDough() { this.pizza.setDough("pan baked"); };
	buildSauce() { this.pizza.setSauce("hot"); };
	buildTopping() { this.pizza.setTopping("pepperoni+salami"); };
}

class Waiter {
  
  constructor() {
    this.pizzaBuilder = undefined
  }

	setPizzaBuilder(builder) {
		this.pizzaBuilder = builder;
	};
	getPizza() {
		return this.pizzaBuilder.getPizza();
	};
	
	constructPizza() {
		this.pizzaBuilder.createNewPizzaProduct();
		this.pizzaBuilder.buildDough();
		this.pizzaBuilder.buildSauce();
		this.pizzaBuilder.buildTopping();
	};
}
console.log('----------------------builder pattern-----------------')
let pizza;
let waiter = new Waiter();

let hawaiianPizzaBuilder = new HawaiianPizzaBuilder();
waiter.setPizzaBuilder(hawaiianPizzaBuilder);
waiter.constructPizza();
pizza = waiter.getPizza();
console.log(`${pizza.getDough()}, ${pizza.getSauce()}, ${pizza.getTopping()}`);

let spicyPizzaBuilder = new SpicyPizzaBuilder();
waiter.setPizzaBuilder(spicyPizzaBuilder);
waiter.constructPizza();
pizza = waiter.getPizza();
console.log(`${pizza.getDough()}, ${pizza.getSauce()}, ${pizza.getTopping()}`);
