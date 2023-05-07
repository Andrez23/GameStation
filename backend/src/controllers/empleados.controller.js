const empleadoCtrl= {}
const empleadoModel = require("../models/empleado.model")

empleadoCtrl.list = async(req, res) =>{
    try{
        const empleados = await empleadoModel.find();
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

empleadoCtrl.listid= async (req, res) =>{
    try{
        const {id} = req.params;
        const empleado= await empleadoModel.findByid({_id:id})

        if (!empleado){
            return res.status(404).json({
                ok: false,
                message: "empleado no encontrado"
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

empleadoCtrl.add = async (req,res) =>{
    try{
        const {id_empleado, documento_usuario, documento_empleado, id_categoria, id_pelicula, fecha_venta, fecha_devolucion, total} = req.body
        if (!id_empleado || id_empleado.trim()===""){
            return res.status(400).json({
                ok:false,
                message: "El campo id_empleado es requerido y no puede estar vacio"
            })
        }

        const verificar = await empleadoModel.findOne({documento_empleado})
        if (verificar){
            return res.json({
                ok:false,
                message: "El correo ya esta registrado con otro usuario"
            });
        }

        const newempleado = new empleadoModel({
            id_empleado,
            documento_usuario,
            documento_empleado,
            id_categoria,
            id_pelicula,
            fecha_venta,
            fecha_devolucion,
            total,
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

empleadoCtrl.update= async (req, res) => {
    try{
        const {id}= req.params
        const empleado= await empleadoModel.findById({_id:id})

        if (!empleado) {
            return res.status(404).json({
                ok:false,
                message: "empleado no encontrada"
            });
        }

        const id_empleado= req.body.id_empleado || empleado.id_empleado;  //todo este bloque trae la informacion y la muestra
        const documento_usuario = req.body.documento_usuario || empleado.documento_usuario;
        const documento_empleado = req.body.documento_empleado || empleado.documento_empleado;
        const id_categoria = req.body.id_categoria || empleado.id_categoria;
        const id_pelicula = req.body.id_pelicula || empleado.id_pelicula;
        const fecha_venta = req.body.fecha_venta || empleado.fecha_venta;
        const fecha_devolucion = req.body.fecha_devolucion || empleado.fecha_devolucion;
        const total = req.body.total || empleado.total;

        const empleadoUpdate = {
            id_empleado,
            documento_usuario,
            documento_empleado,
            id_categoria,
            id_pelicula,
            fecha_venta,
            fecha_devolucion,
            total,
        };
        await empleado.updateOne(empleadoUpdate);
        res.json({ 
            ok:true,
            message: "empleado actualizada",
        })
    } catch (error) {
        res.satus(500).json({
            ok:false,
            message: error.message
        });
    }
}

empleadoCtrl.delete= async(req, res) =>{
    try {
        const{id}=req.params;
        const empleado = await empleadoModel.findById({_id:id});

        if(!empleado){
            return res.status(404).json({
                ok:false,
                message: "empleado no econtrada"
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


module.exports = empleadoCtrl;