function add({ n1, n2, n3 }: { n1: number; n2: number; n3: number; }) {
    return n1 + n2 + n3;
}

const number1: number = 10;
let number2: number = 25.5;
const number3: number = 7;

const answer = add({ n1: number1, n2: number2, n3: number3 });