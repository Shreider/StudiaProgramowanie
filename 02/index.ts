const checkArgT = (par: number | string) => {
    if(typeof par === 'string') {
        console.log('par type: string')
    }
    else if(typeof par === 'number') {
        console.log('par type: number')
    }
    else {
        console.log(`par type: ${typeof par} (other)`)
    }
}

checkArgT('hw')