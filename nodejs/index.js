var fs = require('fs');
try{
    fs.readFile('../input.txt', 'utf8', (err, contents) =>{
        if(err !== null){
            console.log('Error Read Data');        
            return false
        }
        
        const split =  contents.split("\r\n")
        const arr1 = split[0]
        const arr2 = split[1]
        
        if(!arr1 || !arr2){
            console.log('Must be 2 arrays in file');        
            return false
        }
        console.log('first array : '+ arr1)
        console.log('second array : '+ arr2)
        sArr1 = arr1.split(",").map(s => s.trim())
        sArr2 = arr2.split(",").map(s => s.trim())

        const hasil = intersect(sArr1, sArr2)
        console.log('matching value : '+hasil)

    });
}catch(ex){
    console.log('Something Error With Data');
}

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t;
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}