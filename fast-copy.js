const fs =require('fs')
const fsPromises =require('fs/promises')

const filesList = [...process.argv.slice(2)]
console.log(filesList)

  const addFile = async (src , dest) => {
    await fsPromises.copyFile(src, dest)
  }

  const fastCopy = async (path ,directory, filesArray) => {
    //todo verifier l'existence du nouveau dossier
    await fsPromises.mkdir(directory)

    for(let i=0 ; i<filesArray.length ; ++i){
      addFile(path+filesArray[i],directory+filesArray[i])
    }
  }


fastCopy('./folder/','./dossier/',filesList)