
interface Point {
    x: number,
    y: number
    draw: () => unknown;
}

let userInput: unknown;

function generateError(message: string, code: number) {
    throw{message: message, erroCode: code};
};

generateError('an error of', 250);

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 5,
    y:2
})