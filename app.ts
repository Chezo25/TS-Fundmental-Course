type Group = number | string;

function add(
    input1: number | string, 
    input2: number | string, 
    converationResults: 'as-number'| 'as-text'
){
    let result;
    if (typeof +input1 === 'number' && input2 === 'string') {
        result = input1 + input2;
    }
    
    return result;
}



