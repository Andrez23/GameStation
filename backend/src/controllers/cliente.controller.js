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
    const { id_cliente, nombre, descripcion } = req.body;
    if (!id_cliente || id_cliente.trim() === "") {
      return res.status(400).json({
        ok: false,
        message: "El campo id_cliente es requerido y no puede estar vacío",
      });
    }

    const verificar = await clienteModel.findOne({ id_cliente });
    if (verificar) {
      return res.json({
        ok: false,
        message: "El cliente ya está registrado con otro empleado",
      });
    }

    const newCliente = new clienteModel({
      id_cliente,
      nombre,
      descripcion,
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

    const id_cliente = req.body.id_cliente || cliente.id_cliente;
    const nombre = req.body.nombre || cliente.nombre;
    const descripcion = req.body.descripcion || cliente.descripcion;

    const clienteUpdate = {
      id_cliente,
      nombre,
      descripcion,
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
