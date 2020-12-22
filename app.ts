
import{Point} from "./point";

let userInput: unknown;

function generateError(message: string, code: number) {
    throw{message: message, erroCode: code};
};

generateError('an error of', 250);


let point = new Point(5, 10);
point.draw();