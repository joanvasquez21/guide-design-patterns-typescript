
class Computer{
    public cpu: string = 'cpu -not defined';
    public ram: string = 'cpu -not defined';
    public storage: string = 'cpu -not defined';
    public gpu?: string = 'cpu -not defined';

    displayConfiguration(){
        console.log(`configuracion de la computadorada
                CPU: ${this.cpu}
                RAM: ${this.ram}
                ALMACENAMIENTO: ${this.storage}
                GPU: ${this.gpu}
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


function main(){
    const basicComputer = new ComputerBuilder()
    .setCpu('intel core 2 duo')
    .setRAM('4GB')
    .setStorage('256GB')
    .build()

    console.log('%cbasic computer: ')
    basicComputer.displayConfiguration()

}

main();