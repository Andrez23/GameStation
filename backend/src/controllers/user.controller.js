UseCtrl.list = async(req, res) =>{
    try{
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
        const user= awaituserMOdel.findByid({_id:id});
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
            message: error.message,
        });
    }
};

userCtrl.add = async (req,res) =>{
    try{
        const {name, lastname, email, salary} = req.body
        if (!name || name.trim()===""){
            return res.status(400).json({
                ok:false,
                message: "Ek campo name es requerido y no pudeestar"
            })
        }

        const verificar = await userModel.findOne({email})
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
        })

        await newUser .save()
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