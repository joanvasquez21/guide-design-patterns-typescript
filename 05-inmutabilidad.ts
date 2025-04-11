/**
 * inmutabilidad con copia
 * aunque la inmutabilidad
 * inmutable no podemos cambiar
 */
class CodeEditorState{
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsaveChanges: boolean;

    constructor(content: string, cursorPosition: number, unsaveChange: boolean ){
        this.content   = content
        this.cursorPosition = cursorPosition
        this.unsaveChanges = unsaveChange
    }

    displayState(){
        console.log('estado del editor:')
        console.log(`
            contenido: ${this.content}
            cursor position: ${this.cursorPosition}
            unsave change: ${this.unsaveChanges}
            `)
    }

    copywith({content, cursorPosition, unsaveChanges}: Partial<CodeEditorState>): CodeEditorState{
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsaveChanges ?? this.unsaveChanges
        )
    }
}


class CodeEditorHistory{

    //metodo privado
    private history: CodeEditorState[] = []
    private currentIndex: number = -1; //

    save(state: CodeEditorState): void{
        if(this.currentIndex < this.history.length - 1 ){
            this.history = this.history.slice(0, this.currentIndex +1)
        }
        
        this.history.push(state)
        this.currentIndex++
    }

    undo(): CodeEditorState | null{
        if(this.currentIndex > 0 ){
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    redo(): CodeEditorState | null{
        if( this.currentIndex < this.history.length -1  ){
            this.currentIndex++
            return this.history[this.currentIndex]
        }

        return null;
    }

}

function mainInmutability(){
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState("console.log('hello world');", 2, false);

        history.save(editorState)

        console.log('despues del primer cambio')
        editorState.displayState();

        console.log('despues de mover el cursor')
        editorState = editorState.copywith({content: "console.log('h')"})
        history.save(editorState)
        editorState.displayState();


    }

mainInmutability()