interface Hamburger{
    prepare(): void;
}

interface Drink{
    pour(): void;
}

class ChikenHamburgers implements Hamburger{
    prepare(): void {
        console.log('preparando hamburguesa de pollo');
    }
}


class BeefHamburgers implements Hamburger{
    prepare(): void {
        console.log('preparando hamburguesa de Res');
    }
}

class Water implements Drink{
    pour(): void {
        throw new Error("Sirviendo un vaso de agua");
    }
}

class Soda implements Drink{
    pour(): void {
        throw new Error("Sirviendo un vaso de gaseosa");
    }
}


interface RestaurantFactory{
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger {
        throw new BeefHamburgers();
    }
    createDrink(): Drink {
        throw new Soda();
    }
    
}

class HealthyFoodRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger {
        throw new ChikenHamburgers();
    }
    createDrink(): Drink {
        throw new Water();
    }
    
}
//Utilizacion del abstract factory
function mainAbstractFactory( factory: RestaurantFactory){
    const hamburguer =  factory.createHamburger();
    const drink =  factory.createDrink();

    hamburguer.prepare();
    drink.pour();
}

console.log('pedido del menu regular:')

mainAbstractFactory(new FastFoodRestaurantFactory())

mainAbstractFactory(new HealthyFoodRestaurantFactory())
