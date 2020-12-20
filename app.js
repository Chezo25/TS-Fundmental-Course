function add(input1, input2, converationResults) {
    var result;
    if (typeof +input1 === 'number' && input2 === 'string') {
        result = input1 + input2;
    }
    return result;
}
