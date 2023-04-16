const testCtrl={}

testCtrl.listar=(req,res)=>{
    try{
        res.json({
            ok:true,
            message:"probando ruta get listar"
        })
    } catch(error) {
        request.status(500).json({
            ok:false,
            message:error.message
        })
    }
}

testCtrl.Agregar=(req,res)=>{
    try{
        const {name,lastname}= req.body
        const newItem= {name,lastname}
        request.status(201).json({
            ok:true,
            newItem
        })
    }  catch (error){
        request.status(500).json({
            ok:false,
            message:error.message
        })
    }

}

testCtrl.update = (req, res) => {
    try {
        const { id } = req.params
        res.json({
            ok: true,
            message: ` el dato con el id ${id} fue actualizado`,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
} 

testCtrl.delete = (req, res) => {
    try {
        const { id } = req.params
        res.json({
            ok: true,
            message: ` el dato con el id ${id} fue eliminado`,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports  = testCtrl