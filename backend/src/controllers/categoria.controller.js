const categoriaCtrl = {};
const categoriaModel = require("../models/categoria.model");

categoriaCtrl.list = async (req, res) => {
  try {
    const categorias = await categoriaModel.find();
    res.json({
      ok: true,
      categorias,
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
    const categoria = await categoriaModel.findById({ _id: id });

    if (!categoria) {
      return res.status(404).json({
        ok: false,
        message: "Categoría no encontrada",
      });
    }
    res.json({ ok: true, categoria });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

categoriaCtrl.add = async (req, res) => {
  try {
    const { id_categoria } = req.body;
    if (!id_categoria || id_categoria.trim() === "") {
      return res.status(400).json({
        ok: false,
        message: "El campo id_categoria es requerido y no puede estar vacío",
      });
    }

    const verificar = await categoriaModel.findOne({ id_categoria });
    if (verificar) {
      return res.json({
        ok: false,
        message: "La categoría ya está registrada",
      });
    }

    const newCategoria = new categoriaModel({
      id_categoria
    });

    await newCategoria.save();
    res.json({
      ok: true,
      newCategoria,
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
    const categoria = await categoriaModel.findById({ _id: id });

    if (!categoria) {
      return res.status(404).json({
        ok: false,
        message: "Categoría no encontrada",
      });
    }

    const id_categoria = req.body.id_categoria || categoria.id_categoria;

    const categoriaUpdate = {
      id_categoria,

    };
    await categoria.updateOne(categoriaUpdate);
    res.json({
      ok: true,
      message: "Categoría actualizada",
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
    const categoria = await categoriaModel.findById({ _id: id });

    if (!categoria) {
      return res.status(404).json({
        ok: false,
        message: "Categoría no encontrada",
      });
    }
    await categoria.deleteOne();
    res.json({ Ok: true, message: "Categoría eliminada" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = categoriaCtrl;