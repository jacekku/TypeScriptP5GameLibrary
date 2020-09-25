const margin = 10
CONTEXT_MENU = {
    show:false,
    x:-100,
    y:-100
}

function contextMenu(x,y){
    CONTEXT_MENU.x = x
    CONTEXT_MENU.y = y
}
function drawContextMenu() {
    const {x,y} = CONTEXT_MENU;
    const w = GuiHandler.contextItems.sort((a,b)=>b.itemName.length-a.itemName.length)[0].itemName.length*guiTextSize()/2+margin
    const h = GuiHandler.contextItems.length*guiTextSize()+margin
    const length = h/GuiHandler.contextItems.length
    pointInRect(mouseX,mouseY,x,y,w,h)?guiBuffer.fill(128):guiBuffer.fill(255)
    guiBuffer.rect(x,y,w,h);
    guiBuffer.fill(0)
    GuiHandler.contextItems.forEach((item,index)=>{
        item.setPosition(x,y+guiTextSize()*(index),w,length)
        item.show()
        textMap(item.itemName,x+margin/2,y+guiTextSize()*(index+1))
    })
}

function guiTextSize(){
    return guiBuffer.textSize()
}

function drawGui(){
    if(CONTEXT_MENU.show){
        drawContextMenu()
    }
}

function toggleContextMenu(){
    const show = CONTEXT_MENU.show?false:true
    if(!show){
        resetContext()
    }
    CONTEXT_MENU.show = show
}
function resetContext(){
    CONTEXT_MENU.x=-1000
    CONTEXT_MENU.y=-1000
}
function handleContextMenu(){

}

function textMap(string,x,y,yTimes=1) {
    guiBuffer.fill(0)
    if(x<0)x=width+x
    if(y<0)y=height+y
    if(y === 'textSize')y=guiBuffer.textSize()
    guiBuffer.text(string,x,y*yTimes)
    return [string,x,y]
}

function reset(){
    guiBuffer.clear()
    guiBuffer.textSize(20)
    guiBuffer.fill(255)
}
function setupGui(){
    guiBuffer.reset = reset
}