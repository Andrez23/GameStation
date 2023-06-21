const clienteCtrl = {};
const clienteModel = require("../models/cliente.model");

clienteCtrl.list = async (req, res) => {
  try {
    const clientes = await clienteModel.find();
    res.json({
      ok: true,
      clientes,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

clienteCtrl.listid = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteModel.findById({ _id: id });

    if (!cliente) {
      return res.status(404).json({
        ok: false,
        message: "Cliente no encontrado",
      });
    }
    res.json({ ok: true, cliente });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

clienteCtrl.add = async (req, res) => {
  try {
    const { documento_usuario, nombre,apellido,telefono, direccion,correoElectronico, númeroAuxiliar, fechaNacimiento } = req.body;
    if (!documento_usuario || documento_usuario.trim() === "") {
      return res.status(400).json({
        ok: false,
        message: "El campo documento_usuario es requerido y no puede estar vacío",
      });
    }

    const verificar = await clienteModel.findOne({ documento_usuario});
    if (verificar) {
      return res.json({
        ok: false,
        message: "El cliente ya está registrado con otro documento",
      });
    }

    const newCliente = new clienteModel({
      documento_usuario,
      nombre,
      apellido,
      telefono,
      direccion,
      correoElectronico,
      númeroAuxiliar,
      fechaNacimiento,
    });

    await newCliente.save();
    res.json({
      ok: true,
      newCliente,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

clienteCtrl.update = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteModel.findById({ _id: id });

    if (!cliente) {
      return res.status(404).json({
        ok: false,
        message: "Cliente no encontrado",
      });
    }

    const documento_usuario = req.body.documento_usuario || cliente.documento_usuario
    const nombre = req.body.nombre || cliente.nombre;
    const apellido = req.body.apellido || cliente.apellido;
    const telefono = req.body.telefono || cliente.telefono;
    const direccion = req.body.direccion || cliente.direccion;
    const correoElectronico = req.body.correoElectronico || cliente.correoElectronico;
    const númeroAuxiliar = req.body.númeroAuxiliar || cliente.númeroAuxiliar;
    const fechaNacimiento = req.body.fechaNacimiento || cliente.fechaNacimiento;

    const clienteUpdate = {
      documento_usuario,
      nombre,
      apellido,
      telefono,
      direccion,
      correoElectronico,
      númeroAuxiliar,
      fechaNacimiento,
    };
    await cliente.updateOne(clienteUpdate);
    res.json({
      ok: true,
      message: "Cliente actualizado",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

clienteCtrl.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteModel.findById({ _id: id });

    if (!cliente) {
      return res.status(404).json({
        ok: false,
        message: "Cliente no encontrado",
      });
    }
    await cliente.deleteOne();
    res.json({ ok: true, message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = clienteCtrl;
