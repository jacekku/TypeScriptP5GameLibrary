// function rectMap(x: number, y: number, a: number, b: number = a):  {
//     currentBuffer.rect(x * scaling, y * scaling, a * scaling, b * scaling)
//     return [x * scaling, y * scaling, a * scaling, b * scaling]
// }

// function ellipseMap(x, y, r1, r2 = r1) {
//     currentBuffer.ellipse(x, y , 2 * r1 * scaling, 2 * r2 * scaling)
//     return [x, y , 2 * r1 * scaling, 2 * r2 * scaling]
// }

// function rectObjectInCircle(object,x1,y1,size1){
//     const {x,y,size} = object
//     return rectInCircle(x,y,size,x1,y1,size1)
// }

// function rectInCircle(rX, rY, rS, cX, cY, cS) {
//     const out = (
//         (dist(rX, rY, cX, cY)) <= cS &&
//         (dist(rX + rS, rY, cX, cY)) <= cS &&
//         (dist(rX, rY + rS, cX, cY)) <= cS &&
//         (dist(rX + rS, rY + rS, cX, cY)) <= cS
//     )
//     return out
// }
// function pointInRect(x1,y1,x2,y2,w,h){
//     return x1 > x2 && x1 < x2 + w && y1 > y2 && y1 < y2 + h 
// }

// function mouseInSpaceObject(x1,y1,spaceObject){
//     const {x,y,size} = spaceObject;
//     return pointInCircle(x1,y1,x,y,size)
// }

// function pointInCircle(x1, y1, x2, y2, r) {
//     return dist(x1, y1, x2, y2) < r
// }
export function randomInt(min:number = 0, max?:number):number{
    if(!max){
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
    return 'xxxxxxxxxx'.replace(/x/g, e=> randomInt(35).toString(36))
}
// function contextMenu(){
//     currentBuffer.fill(0)
//     currentBuffer.rect(mouseX,mouseY,100)
//     console.log(mouseX,mouseY,mouseXMap,mouseYMap)
// }
// function showMapCredits(metadata){
//     for(let el in metadata){
//         console.log(`${el}: ${metadata[el]}`)
//     }
// }
// function debugTemplate(string,...values){
//     let out = ""
// }
// function floorAll(object){
//     const out = Object.assign({},object)
//     for (value in out){
//         if(Math.floor(out[value])){
//             out[value] = Math.floor(out[value])
//         }
//     }
//     return out
// }