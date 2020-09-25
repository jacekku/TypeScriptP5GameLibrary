class Button {
    constructor(name){
        this.x = this.y = this.w = this.h = 0 
        this.name = name
    }
    interact(){
        console.log(this.name)
    }
    setPosition(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h 
    }
    show(){
        // textMap(this.name,this.x,this.y)
        if(pointInRect(mouseX,mouseY,this.x,this.y,this.w,this.h)){
            guiBuffer.fill(0,255,0)
            guiBuffer.rect(this.x,this.y,this.w,this.h)
        }
    }
    get itemName(){
        return this.name
    }
}

class GuiHandler{
    static interact(){
        console.log("gui")
        const {x,y} = CONTEXT_MENU
        
        return CONTEXT_MENU.show;
    }
    static setup(buffer){
        this.buffer = buffer
        setupGui()
    }
    static get contextItems(){
        return this._contextItems
    }
    static set contextItems(a = {itemName,callback,position}){
        this._contextItems.push(a)
    }

    static registerContextMenuItem(itemName,callback=()=>{},position=-1){
        this.contextItems = new Button(itemName)
    }
}
GuiHandler._contextItems = []