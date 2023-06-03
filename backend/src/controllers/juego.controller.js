const juegoCtrl = {};
const juegoModel = require("../models/juego.model");

juegoCtrl.list = async (req, res) => {
  try {
    const juegos = await juegoModel.find();
    res.json({
      ok: true,
      juegos,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

juegoCtrl.listid = async (req, res) => {
  try {
    const { id } = req.params;
    const juego = await juegoModel.findById({ _id: id });

    if (!juego) {
      return res.status(404).json({
        ok: false,
        message: "juego no encontrado",
      });
    }
    res.json({ ok: true, juego });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

juegoCtrl.add = async (req, res) => {
  try {
    const { id_juego, nombre, descripción, precio, categoría, subcategoría } = req.body;
    if (!id_juego || id_juego.trim() === "") {
      return res.status(400).json({
        ok: false,
        message: "El campo id_juego es requerido y no puede estar vacío",
      });
    }

    const verificar = await juegoModel.findOne({ id_juego });
    if (verificar) {
      return res.json({
        ok: false,
        message: "El juego ya está registrado",
      });
    }

    const newjuego = new juegoModel({
      id_juego,
      nombre,
      descripción,
      precio,
      categoría,
      subcategoría,
    });

    await newjuego.save();
    res.json({
      ok: true,
      newjuego,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

juegoCtrl.update = async (req, res) => {
  try {
    const { id } = req.params;
    const juego = await juegoModel.findById({ _id: id });

    if (!juego) {
      return res.status(404).json({
        ok: false,
        message: "juego no encontrado",
      });
    }

    const id_juego = req.body.id_juego || juego.id_juego;
    const nombre = req.body.nombre || juego.nombre;
    const descripción = req.body.descripción || juego.descripción;
    const precio = req.body.precio || juego.precio;
    const categoría = req.body.categoría || juego.categoría;
    const subcategoría = req.body.subcategoría || juego.subcategoría;

    const juegoUpdate = {
      id_juego,
      nombre,
      descripción,
      precio,
      categoría,
      subcategoría,
    };
    await juego.updateOne(juegoUpdate);
    res.json({
      ok: true,
      message: "juego actualizado",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

juegoCtrl.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const juego = await juegoModel.findById({ _id: id });

    if (!juego) {
      return res.status(404).json({
        ok: false,
        message: "juego no encontrado",
      });
    }
    await juego.deleteOne();
    res.json({ ok: true, message: "juego eliminado" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = juegoCtrl;