/*const checkArgT = (par: number | string | null) => {
    if(typeof par === 'number') {
        console.log(`par type: ${typeof par}`)
    }
    else {
        console.log(`par type: ${typeof par} (other)`)
    }
}

checkArgT('hw')
checkArgT(2)
checkArgT(null)*/
function addNum(num1, num2) {
    return num1 + num2;
}
var addNum2 = function (num1, num2) {
    return num1 + num2;
};
console.log(addNum(1, 6));
console.log(addNum2(1, 6));
