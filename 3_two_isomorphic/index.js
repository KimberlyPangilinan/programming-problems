function isomorph(a, b) {

    let modifiedA = []
    let modifiedB = []
    
    if(a.length != b.length) {
      return false
    }
    
    for( let i = 0; i < a.length; i++){
      modifiedA.push(a.indexOf(a[i]))
      modifiedB.push(b.indexOf(b[i]))
    }
  
    for (let i = 0; i < a.length; i++) {
      if(modifiedA[i] != modifiedB[i]){
        return false
      }
    }
    
    return true;
    
}

module.exports = isomorph;