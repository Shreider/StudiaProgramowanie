var checkArgT = function (par) {
    if (typeof par === 'number') {
        console.log("par type: ".concat(typeof par));
    }
    else {
        console.log("par type: ".concat(typeof par, " (other)"));
    }
};
checkArgT('hw');
