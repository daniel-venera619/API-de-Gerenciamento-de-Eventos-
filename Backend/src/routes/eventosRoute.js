const express = require("express");
const router = express.Router();
const eventosController = require("../controller/eventosController");

router.get("/eventos", eventosController.buscarTodos);
router.get("/eventos/:id", eventosController.buscarPorId);
router.post("/eventos", eventosController.adicionar);
router.put("/eventos/:id", eventosController.editar);
router.delete("/eventos/:id", eventosController.excluir);

module.exports = router;
