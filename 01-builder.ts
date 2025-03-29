
class Computer{
    public cpu: string = 'cpu -not defined';
    public ram: string = 'cpu -not defined';
    public storage: string = 'cpu -not defined';
    public gpu?: string;

    displayConfiguration(){
    console.log(`configuracion de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            ALMACENAMIENTO: ${this.storage}
            GPU: ${this.gpu ?? 'no tiene gpu'}
        `)
    }

}

//Clase que implementara el platron builder
class ComputerBuilder{

    private computer: Computer;

    constructor(){
        this.computer = new Computer();
    }

    setCpu(cpu: string): ComputerBuilder{
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder{
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder{
        this.computer.storage = storage;
        return this;
    }

    setGpu(gpu: string): ComputerBuilder{
        this.computer.gpu = gpu;
        return this;
    }
    //metodo para construir la computadora
    build(){
        return this.computer;
    }
}

//Utilizamos el builder a traves de este  function main
function main(){
    const basicComputer = new ComputerBuilder()

    .setCpu('intel core 2 duo')
    .setRAM('4GB')
    .setStorage('256GB')
    .build()

    console.log('%c basic computer: ')
    basicComputer.displayConfiguration()

    //gamer computer

    const gamingComputer = new ComputerBuilder()
    .setCpu('intel i9')
    .setRAM('32GB')
    .setStorage('1TB M2 ')
    .setGpu('RTX40')
    .build()

    gamingComputer.displayConfiguration()
}

main();