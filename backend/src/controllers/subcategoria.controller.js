const categoriaCtrl = {};
const subcategoriaModel = require("../models/subcategoria.model");

categoriaCtrl.list = async (req, res) => {
  try {
    const subcategorias = await subcategoriaModel.find();
    res.json({
      ok: true,
      subcategorias,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

categoriaCtrl.listid = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategoria = await subcategoriaModel.findById({ _id: id });

    if (!subcategoria) {
      return res.status(404).json({
        ok: false,
        message: "Subcategoría no encontrada",
      });
    }
    res.json({ ok: true, subcategoria });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

categoriaCtrl.add = async (req, res) => {
  try {
    const { id_subcategoria, nombre, descripcion } = req.body;
    if (!id_subcategoria || id_subcategoria.trim() === "") {
      return res.status(400).json({
        ok: false,
        message: "El campo id_subcategoria es requerido y no puede estar vacío",
      });
    }

    const verificar = await subcategoriaModel.findOne({ id_subcategoria });
    if (verificar) {
      return res.json({
        ok: false,
        message: "La subcategoría ya está registrada con otro empleado",
      });
    }

    const newSubcategoria = new subcategoriaModel({
      id_subcategoria,
      nombre,
      descripcion,
    });

    await newSubcategoria.save();
    res.json({
      ok: true,
      newSubcategoria,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

categoriaCtrl.update = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategoria = await subcategoriaModel.findById({ _id: id });

    if (!subcategoria) {
      return res.status(404).json({
        ok: false,
        message: "Subcategoría no encontrada",
      });
    }

    const id_subcategoria = req.body.id_subcategoria || subcategoria.id_subcategoria;
    const nombre = req.body.nombre || subcategoria.nombre;
    const descripcion = req.body.descripcion || subcategoria.descripcion;

    const subcategoriaUpdate = {
      id_subcategoria,
      nombre,
      descripcion,
    };
    await subcategoria.updateOne(subcategoriaUpdate);
    res.json({
      ok: true,
      message: "Subcategoría actualizada",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

categoriaCtrl.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategoria = await subcategoriaModel.findById({ _id: id });

    if (!subcategoria) {
      return res.status(404).json({
        ok: false,
        message: "Subcategoría no encontrada",
      });
    }
    await subcategoria.deleteOne();
    res.json({ Ok: true, message: "Subcategoría eliminada" });
    } catch (error) {
        res.status(500).json({
        ok: false,
        message: error.message,
        });
        }
        };
        
        module.exports = categoriaCtrl;