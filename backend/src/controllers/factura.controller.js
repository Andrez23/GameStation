const facturaCtrl= {}
const facturaModel = require("../models/factura.model")

facturaCtrl.list = async(req, res) =>{
    try{
        const facturas = await facturaModel.find();
        res.json ({
            ok:true,
            facturas
        });

    }catch (error){
        res.status(500).json({
            ok:false,
            message:error.message
        })
    }
}

facturaCtrl.listid= async (req, res) =>{
    try{
        const {id} = req.params;
        const factura= await facturaModel.findByid({_id:id})

        if (!factura){
            return res.status(404).json({
                ok: false,
                message: "Factura no encontrada"
            });
        }
        res.json({ok: true, factura});
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        });
    }
};

facturaCtrl.add = async (req,res) =>{
    try{
        const {id_factura, documento_usuario, documento_empleado, id_categoria, id_pelicula, fecha_venta, fecha_devolucion, total} = req.body
        if (!id_factura || id_factura.trim()===""){
            return res.status(400).json({
                ok:false,
                message: "El campo id_factura es requerido y no puede estar vacio"
            })
        }

        const verificar = await facturaModel.findOne({id_factura})
        if (verificar){
            return res.json({
                ok:false,
                message: "El id ya esta registrado con otra factura"
            });
        }

        const newfactura = new facturaModel({
            id_factura,
            documento_usuario,
            documento_empleado,
            id_categoria,
            id_pelicula,
            fecha_venta,
            fecha_devolucion,
            total,
        })

        await newfactura .save()
        res.json({
            ok:true,
            newfactura
        })
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        })
    }
}

facturaCtrl.update= async (req, res) => {
    try{
        const {id}= req.params
        const factura= await facturaModel.findById({_id:id})

        if (!factura) {
            return res.status(404).json({
                ok:false,
                message: "Factura no encontrada"
            });
        }

        const id_factura= req.body.id_factura || factura.id_factura;  //todo este bloque trae la informacion y la muestra
        const documento_usuario = req.body.documento_usuario || factura.documento_usuario;
        const documento_empleado = req.body.documento_empleado || factura.documento_empleado;
        const id_categoria = req.body.id_categoria || factura.id_categoria;
        const id_pelicula = req.body.id_pelicula || factura.id_pelicula;
        const fecha_venta = req.body.fecha_venta || factura.fecha_venta;
        const fecha_devolucion = req.body.fecha_devolucion || factura.fecha_devolucion;
        const total = req.body.total || factura.total;

        const facturaUpdate = {
            id_factura,
            documento_usuario,
            documento_empleado,
            id_categoria,
            id_pelicula,
            fecha_venta,
            fecha_devolucion,
            total,
        };
        await factura.updateOne(facturaUpdate);
        res.json({ 
            ok:true,
            message: "Factura actualizada",
        })
    } catch (error) {
        res.satus(500).json({
            ok:false,
            message: error.message
        });
    }
}

facturaCtrl.delete= async(req, res) =>{
    try {
        const{id}=req.params;
        const factura = await facturaModel.findById({_id:id});

        if(!factura){
            return res.status(404).json({
                ok:false,
                message: "Factura no econtrada"
            });
        }
        await factura.deleteOne()
        res.json({Ok: true, message: "Factura eliminado"});

    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error. message
        });
    }
};


module.exports = facturaCtrl;