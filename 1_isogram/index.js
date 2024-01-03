function isIsogram(str) {
    str = str.toLowerCase()
    for (let i=0; i < str.length; i++){
        if (str.indexOf(str[i]) !== i) {
            console.log(`${str} is not an isogram`)
            return false;
        }
    }
    console.log(`${str} is an isogram`)
    return true;
}


module.exports = isIsogram;