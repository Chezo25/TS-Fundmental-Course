
class Point {
    x: number;
    y: number;

    draw() {
        //...
    }
    }

let userInput: unknown;

function generateError(message: string, code: number) {
    throw{message: message, erroCode: code};
};

generateError('an error of', 250);


let point = new Point();
point.x = 5;
point.y = 10;
point.draw();