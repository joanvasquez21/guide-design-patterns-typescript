//Esta clase contiene todo lo necesario para hacer consultas dinámicas SQL
class QueryBuilder{
    //En estas variables privadas se almacena distintas partes de la conslta
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitCount?: number;
    //Metodo constructor . al crear un QueryBuilder le pasamos la tabla sobre la que queramos trabajar(ej: details, users) en este ejemplo es users
    constructor(table: string){
        this.table = table;
    }
    //Guardamos  los campos que queramos seleccionar, fields es un restoperator(...) guardamos distintos argumentos de tipo string
    select(...fields: string[]): QueryBuilder{
        this.fields = fields;
        return this;
    }

    where(condition: string): QueryBuilder{
        this.conditions.push(condition);
        return this;
    }
    //añadimos los campos para ordenar, y como segundo argumento pasamos direction que puede ser 'ASC' o 'DESC' por defecto sera 'ASC'
    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder{
        this.orderFields.push(`order by ${field} ${direction} `)
        return this;
    }

    limit(count: number): QueryBuilder{
        this.limitCount = count;
        return this;
    }

    //en este metodo juntamos todo lo anterior y devolvemos la llamada 
    execute(): string{
        //return `SELECT id, name, email from users   where age > 18  and country = 'Per' order by name ASC limit 10;`;
        const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';
        const whereClause = this.conditions.length > 0 ? `WHERE ${this.conditions.join(' AND ')}` : '  ';
        const orderByClause = this.orderFields.length > 0 ? `ORDER BY ${this.orderFields.join(', ')}` : ' ';
        const limitClause = this.limitCount ? `LIMIT ${this.limitCount}` : '';

        return `SELECT ${fields} from ${this.table} ${whereClause} ${orderByClause} ${limitClause} `
    }
}

function mainQuery() {
    const userQuery = new QueryBuilder('users')
        .select('id', 'name', 'email')
        .where('age > 20')
        .orderBy('name', 'ASC')
        .orderBy('age', 'ASC')
        .limit(10)
        .execute();
        console.log('%cConsulta: \n')
        console.log(userQuery);
}

mainQuery();

/*Este codigo estamos usando el patron de DISEÑO builder porque estamos construyendo una consulta sql(objeto)
* paso a paso, a traves de metodos encadenados que se configuran distintas partes del objetos antes de
*generarlo con el metodo execute
*/