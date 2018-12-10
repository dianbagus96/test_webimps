var fs = require('fs');
try{
    fs.readFile('../input.txt', 'utf8', (err, contents) =>{
        if(err !== null){
            console.log('Error Read Data');        
            return false
        }
        
        const split =  contents.split("\r\n")

        var arr = new Array()
        split.forEach((item, num)=>{
            arr[num] = item.split(",").map(s => s.trim())
            
        })

        const hasil = intersect(arr)
        console.log('matching value : '+hasil)

    });
}catch(ex){
    console.log('Something Error With Data');
}

function intersect() {
    var result = [];
    var lists;
  
    arguments.length === 1 ? lists = arguments[0] : lists = arguments;
    
    for(var i = 0; i < lists.length; i++) {
      var currentList = lists[i];
      for(var y = 0; y < currentList.length; y++) {
          var currentValue = currentList[y];
        if(result.indexOf(currentValue) === -1) {
          var existsInAll = true;
          for(var x = 0; x < lists.length; x++) {
            if(lists[x].indexOf(currentValue) === -1) {
              existsInAll = false;
              break;
            }
          }
          if(existsInAll) {
            result.push(currentValue);
          }
        }
      }
    }
    return result;
  }