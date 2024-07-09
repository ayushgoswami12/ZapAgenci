const fs = require('fs');
fs.writeFile("hey.txt2", "anything",function(err){
    if(err) console.error(err)
        else console.log("Done")
})