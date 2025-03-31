interface ReportInventory{
    generate(): void;
}

class SalesReport implements ReportInventory{
    generate(): void {
        console.log('generando reporte de comida');
    }
}

class InventoryReport implements ReportInventory{
    generate(): void {
        console.log("generando reporte de bebidas ");
    }
}
//creamos las fabricas
abstract class ReportFactory{
    protected abstract createReport(): ReportInventory;

    generateReport(): void{
        const report = this.createReport();
        report.generate();
    }
}
// creamos las clases concretas de fabrica de reporte

class SalesReportFactory extends ReportFactory{
    createReport(): ReportInventory {
        return new SalesReport();
    }
}

class InventoryReportFactory extends ReportFactory{
    createReport(): ReportInventory {
        return new InventoryReport();
    }
}

function mainFactory(){
    let reportFactory: ReportFactory;
    const reportType = prompt('que tipo de reporte deseas? (sales/inventory)');
    if(reportType === 'sales'){
        reportFactory = new SalesReportFactory();
    }else{
        reportFactory = new InventoryReportFactory();
    }

    reportFactory.generateReport();
}

mainFactory();