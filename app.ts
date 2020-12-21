
class Point {
    private x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        //...
    }
    
}

let userInput: unknown;

function generateError(message: string, code: number) {
    throw{message: message, erroCode: code};
};

generateError('an error of', 250);


let point = new Point(5, 10);
point.draw();