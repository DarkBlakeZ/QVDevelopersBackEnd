"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var router = (0, _express.Router)();
router.get('/user/:id?', _usuarios.getUser);
router.post('/loginUser', _usuarios.loginUser);
router.post('/user', _usuarios.createUser);
router.put('/user', _usuarios.updateUser);
router["delete"]('/user/:id?', _usuarios.deleteUser);
var _default = router;
exports["default"] = _default;