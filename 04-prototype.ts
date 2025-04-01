/**
* Es un patron del diseño creacional
*/


class DocumentPrototype {
    public title: string
    private content: string
    public author: string

    constructor(title: string, content: string, author: string) {
        this.title = title
        this.content = content
        this.author = author
    }

    //una forma de crear un clone del documento
    clone(): DocumentPrototype {
        return new DocumentPrototype(this.title, this.content, this.author)
    }

    displayInfo() {
        console.log(`title: ${this.title} Content: ${this.content} Author: ${this.author}`)
    }
}
function main() {
    const document1 = new DocumentPrototype('cotizacion', '500', 'joan')
    console.log({ document1 })
    document1.displayInfo()


    const document2 = document1.clone()
    document2.title = 'nuevo titulo'
    console.log({ document2 })


}


main()

