"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pedidos = require("../controllers/pedidos.controller");

var router = (0, _express.Router)();
router.get('/pedidos/:id?', _pedidos.getPedidos);
router.post('/pedidos', _pedidos.createPedido);
router.get('/productsPedido/:id?', _pedidos.getTablePedido);
router.post('/pedidos/product', _pedidos.insertProductPedido);
router["delete"]('/pedido/:id', _pedidos.deletePedido);
var _default = router;
exports["default"] = _default;