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

const addNum = (num1:number, num2:number) => {
    return num1 + num2
}
console.log(addNum(1, 6))
