const checkArgT = (par: number | string | null) => {
    if(typeof par === 'number') {
        console.log(`par type: ${typeof par}`)
    }
    else {
        console.log(`par type: ${typeof par} (other)`)
    }
}

checkArgT('hw')
checkArgT(2)
checkArgT(null)