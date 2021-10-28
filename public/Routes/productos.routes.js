"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productos = require("../controllers/productos.controller");

var router = (0, _express.Router)();
router.get('/product/:id?', _productos.getProduct);
router.post('/product', _productos.createProduct);
router.put('/product', _productos.updateProduct);
router["delete"]('/product/:id?', _productos.deleteProduct);
var _default = router;
exports["default"] = _default;