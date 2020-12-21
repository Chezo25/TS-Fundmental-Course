let userInput: unknown;



function generateError(message: string, code: number) {
    throw{message: message, erroCode: code};
};

generateError('an error of', 250);