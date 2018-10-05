// ES5 EXAMPLE

function carFactory() {
    this.createCar = function (model) {
        var car;

        switch(model) {
            case 'Cayman':
                car = new Cayman();
                break;
            case 'Boxster':
                car = new Boxster();
                break;
            case 'Panamera':
                car = new Panamera();
                break;
            default:
                car = new Cayman();
                break;
        }
        
        if (typeof car.printModel === 'undefined') {
            car.printModel = function () {
                console.log('This car model is:', car.model);
            }
        }
 
        return car;
    }
}

function Cayman() {
    this.model = 'Cayman';

    this.createDoor = function (side) {
        return CaymanDoor(side);
    };

    this.createHood = function () {
        return CaymanHood();
    };
}

function Boxster() {
    this.model = 'Boxster';

    this.createDoor = function (side) {
        return BoxsterDoor(side);
    };

    this.createHood = function () {
        return BoxsterHood();
    };
}

function Panamera() {
    this.model = 'Panamera';

    this.createDoor = function (side) {
        return PanameraDoor(side);
    };

    this.createHood = function () {
        return PanameraHood();
    };
}

function CaymanDoor(side) {
    build = function() {
        console.log(`Build a ${side} door for Cayman`);
    }

    return {
        build: build
    }
}

function BoxsterDoor(side) {
    build = function() {
        console.log(`Build a ${side} door for Boxster`);
    }

    return {
        build: build
    }
}

function PanameraDoor(side) {
    build = function() {
        console.log(`Build a ${side} door for Panamera`);
    }

    return {
        build: build
    }
}

function CaymanHood() {
    build = function() {
        console.log(`Build a hood for Cayman`);
    }

    return {
        build: build
    }
}

function BoxsterHood() {
    build = function() {
        console.log(`Build a hood for Boxster`);
    }

    return {
        build: build
    }
}

function PanameraHood() {
    build = function() {
        console.log(`Build a hood for Panamera`);
    }

    return {
        build: build
    }
}

var factory = new carFactory();

var boxsterCar = factory.createCar('Boxster');

boxsterCar.printModel();

boxsterCar.createDoor('right').build();
boxsterCar.createDoor('left').build();

boxsterCar.createHood().build();