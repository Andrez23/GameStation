const userCtrl= {}
const userModel = require("../models/user.model")

userCtrl.list = async(req, res) =>{
    try{
        const limit = parseInt(req.query.limit) || 10;
        const page=parseInt(req.query.page) || 1;
        const options ={
            limit,
            page
        };
        //const users = await userModel.find() //El .find guardara todos los usuarios del modelo
        const users = await userModel.paginate({},options);
        res.json ({
            ok:true,
            users
        });

    }catch (error){
        res.status(500).json({
            ok:false,
            message:error.message
        })
    }
}

userCtrl.listid= async (req, res) =>{
    try{
        const {id} = req.params;
        const user= await userModel.findByid({_id:id})

        if (!user){
            return res.status(404).json({
                ok: false,
                message: "Usuario no encontrado"
            });
        }
        res.json({ok: true, user});
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        });
    }
};

userCtrl.add = async (req,res) =>{
    try{
        const {name, lastname, email, salary, documento, tipo_de_documento} = req.body
        if (!name || name.trim()===""){
            return res.status(400).json({
                ok:false,
                message: "El campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await userModel.findOne({email}) //Nos permite saber si el correo de un usuario ya existe
        if (verificar){
            return res.json({
                ok:false,
                message: "El correo ya esta registrado con otro usuario"
            });
        }

        const newUser = new userModel({
            name,
            lastname,
            email,
            salary,
            documento,
            tipo_de_documento,
        })

        await newUser .save() //proceso asincronico, es decir, lleva tiempo
        res.json({
            ok:true,
            newUser
        })
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error.message
        })
    }
}

userCtrl.update= async (req, res) => {
    try{
        const {id}= req.params
        const user= await userModel.findById({_id:id})

        if (!user) {   //La negacion en el susario se refiere a si el "si, el usuario no existe"
            return res.status(404).json({
                ok:false,
                message: "Usuario no encontrado"
            });
        }

        const name= req.body.name || user.name;  //todo este bloque trae la informacion y la muestra
        const lastname = req.body.lastname || user.lastname;
        const email = req.body.email || user.email;
        const salary = req.body.salary || user.salary;
        const documento = req.body.documento || user.documento;
        const tipo_de_documento = req.body.tipo_de_documento || user.tipo_de_documento;

        const userUpdate = {
            name,
            lastname,
            email,
            salary,
            documento,
            tipo_de_documento,
        };
        await user.updateOne(userUpdate);
        res.json({ 
            ok:true,
            message: "usuario actualizado",
        })
    } catch (error) {
        res.satus(500).json({
            ok:false,
            message: error.message
        });
    }
}

userCtrl.delete= async(req, res) =>{
    try {
        const{id}=req.params;
        const user = await userModel.findById({_id:id});

        if(!user){
            return res.status(404).json({
                ok:false,
                message: "usuario no encontrado"
            });
        }
        await user.deleteOne()
        res.json({Ok: true, message: "Usuario eliminado"});

    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error. message
        });
    }
};


module.exports = userCtrl;