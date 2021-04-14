const fs =require('fs')
const fsPromises =require('fs/promises')
// test avec des noms de fichier
// entrer le nom du dossier sans ./ au debut
const path = process.argv[2]
const newPath = process.argv[3]




  const addFile = async (src , dest) => {
    await fsPromises.copyFile(src, dest)
  }

  const fastCopy = async (path ,newPath) => {
    //todo verifier l'existence du nouveau dossier
    await fsPromises.mkdir(newPath)
  const dirFiles= await fsPromises.readdir(path)
  console.log(dirFiles)

  for(let i=0 ; i<dirFiles.length ; ++i){
  addFile(path+'/'+dirFiles[i],newPath+'/'+dirFiles[i])
  }
}

fastCopy(path,newPath)