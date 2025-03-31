interface Hamburguer {
    prepare() : void;
}

class ChikenHamburger implements Hamburguer{
    prepare(): void {
        console.log('preparando una hamburguesa de pollo');
    }
}


class BeefHamburguer implements Hamburguer{
    prepare(): void {
        console.log('preparando una hamburguesa de res');
    }
}

class BeanHamburguer implements Hamburguer{
    prepare(): void {
        console.log('preparando una hamburgesa de frejol');
    }
}



//Esta clase abstract nos servira como plantilla para construir otras clases y tambien asi podamos evitar de que instancien directamente
//-------------------------------------------------------------
abstract class Restaurant{
    abstract createHamburguer(): Hamburguer;
    
    orderHamburger():void {
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}
//--------------------------------------------------------------
class ChikenRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer {
        return new ChikenHamburger();
    }
    
}

class BeefRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer {
        return new BeefHamburguer();
    }
    
}

class BeanRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer {
        throw new BeanHamburguer();
    }

}
function main(){
    let restaurant: Restaurant;

    const burguerType = prompt('Que tipo de hamburguesa quieres? (chiken/beef)');

    switch(burguerType){
        case 'chicken':
            restaurant = new ChikenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('opc no valida');
    }

    restaurant.orderHamburger();

}

