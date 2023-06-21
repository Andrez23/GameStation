const empleadosCtrl= {}
const empleadosModel = require("../models/empleados.model")

empleadosCtrl.list = async(req, res) =>{
    try{
        const empleados = await empleadosModel.find();
        res.json ({
            ok:true,
            empleados
        });

    }catch (error){
        res.status(500).json({
            ok:false,
            message:error.message
        })
    }
}

empleadosCtrl.listid= async (req, res) =>{
    try{
        const {id} = req.params;
        const empleado= await empleadosModel.findByid({_id:id})

        if (!empleado){
            return res.status(404).json({
                ok: false,
                message: "Empleado no encontrado"
            });
        }
        res.json({ok: true, empleado});
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        });
    }
};

empleadosCtrl.add = async (req,res) =>{
    try{
        const {id_empleado, documento_empleado, primerNombre, segundoNombre, primerApellido, segundoApellido, cargo, salario, seguro} = req.body
        if (!id_empleado || id_empleado.trim()===""){
            return res.status(400).json({
                ok:false,
                message: "El campo id_empleado es requerido y no puede estar vacio"
            })
        }

        const verificar = await empleadosModel.findOne({documento_empleado})
        if (verificar){
            return res.json({
                ok:false,
                message: "El documento ya esta registrado con otro empleado"
            });
        }

        const newempleado = new empleadosModel({
            id_empleado,                           //campos que podemos agregar en el modelo
            documento_empleado,
            primerNombre,
            segundoNombre, 
            primerApellido,
            segundoApellido, 
            cargo, 
            salario, 
            seguro,
        })

        await newempleado .save()
        res.json({
            ok:true,
            newempleado
        })
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        })
    }
}

empleadosCtrl.update= async (req, res) => {
    try{
        const {id}= req.params
        const empleados= await empleadosModel.findById({_id:id})

        if (!empleados) {
            return res.status(404).json({
                ok:false,
                message: "empleado no encontrado"
            });
        }

        const id_empleado= req.body.id_empleado || empleado.id_empleado;  //todo este bloque trae la informacion y la muestra
        const documento_empleado = req.body.documento_empleado || empleado.documento_empleado;
        const primerNombre = req.body.primerNombre || empleado.primerNombre;
        const segundoNombre = req.body.segundoNombre || empleado.segundoNombre;
        const primerApellido = req.body.primerApellido || empleado.primerApellido;
        const segundoApellido = req.body.segundoApellido || empleado.segundoApellido;
        const cargo = req.body.cargo || empleado.cargo;
        const salario = req.body.salario || empleado.salario;
        const seguro = req.body.seguro || empleado.seguro;

        const empleadosUpdate = {
            id_empleado,
            documento_empleado,
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            cargo,
            salario,
            seguro,
        };
        await empleados.updateOne(empleadosUpdate);
        res.json({ 
            ok:true,
            message: "empleado actualizado",
        })
    } catch (error) {
        res.satus(500).json({
            ok:false,
            message: error.message
        });
    }
}

empleadosCtrl.delete= async(req, res) =>{
    try {
        const{id}=req.params;
        const empleado = await empleadosModel.findById({_id:id});

        if(!empleado){
            return res.status(404).json({
                ok:false,
                message: "empleado no econtrado"
            });
        }
        await empleado.deleteOne()
        res.json({Ok: true, message: "empleado eliminado"});

    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error. message
        });
    }
};


module.exports = empleadosCtrl;