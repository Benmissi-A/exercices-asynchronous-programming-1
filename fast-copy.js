const fs =require('fs')
const fsPromises =require('fs/promises')
// test avec des noms de fichier
// entrer le nom du dossier sans ./ au debut
const path = process.argv[2]
const newPath = process.argv[3]

if(process.argv.length !==4){
  console.log(`only two aruments exepted: path , copy-path`)
  process.exit()
}
if(!fs.existsSync(path)){
console.log(`source directory doesn't exist`)
}

const addFile = async (src , dest) => {
  try{
    await fsPromises.copyFile(src, dest)
  }catch(e){
    throw e
  }
}

const fastCopy = async (path ,newPath) => {
  try{
    //todo verifier l'existence du nouveau dossier
    if(!fs.existsSync(newPath)){
      await fsPromises.mkdir(newPath)
    }
    const dirFiles= await fsPromises.readdir(path)
    console.log(dirFiles)
    for(let i=0 ; i<dirFiles.length ; ++i){
      addFile(path+'/'+dirFiles[i],newPath+'/'+dirFiles[i])
    }  
  }catch(e){
    console.log(e.message)
  }
}

fastCopy(path,newPath)