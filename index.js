const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 4000

const filenames = fs.readdirSync('./sample')
console.log(filenames)
let data = []
let name = []
let fileicon = "https://findicons.com/files/icons/2813/flat_jewels/512/file.png"
let foldericon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1200px-OneDrive_Folder_Icon.svg.png"
filenames.forEach(file=>{
  // console.log(file)
  name = file.split(".")
  if(name[1] == undefined)
  {
    data = data + `<h1> <img width="50" height="50" src=${foldericon} alt="folder" /> ${file}  </h1>`
    console.log("it is folder")
  }
  else{
    data = data + `<h1> <img width="50" height="50" src=${fileicon} alt="file" /> ${file}  </h1>`
 
    console.log("it is file")
  }
  //  console.log(name)
  
})

app.get('/',(req,res)=>{
  res.send(data)
})
app.listen(PORT,()=>{
   
        console.log("server is running...")
})


// fs.readdirSync('../../../Desktop',(err,data)=>{
//     data.map(file=>{
//       `<h1> ${file} </h1>`    
//     })
// }) 







// operating sysytem related task
// const os=  require('os')
// console.log(os)


// file read and write operation
// const fs =  require('fs')
// const data = new Uint8Array(Buffer.from('Hello mona'));
// fs.writeFile('message.txt',data,(err)=>{
//     if(err) throw err;
//     console.log("file updated..")
// })

//  module exports
// const {foo1,foo} = require('./read-data')
// foo1(4,2,"-",foo)