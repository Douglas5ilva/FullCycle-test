const multer = require('multer')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cd)=>{
            cd(null, './arquivos')
        },
        filename: (req,file,cd) => {
            cd(null, Date.now().toString() + "_" + file.originalname )
        }
    }),
    fileFilter: (req,file,cd)=>{
        const estensaoimg = ['image/png','image/jpg','image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype)

        if(estensaoimg){
            return cd(null,true)
        }

        return cd(null, false)
    }
}))