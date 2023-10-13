var checkArgT = function (par) {
    if (typeof par === 'string') {
        console.log('par type: string');
    }
    else if (typeof par === 'number') {
        console.log('par type: number');
    }
};
checkArgT('hw');
