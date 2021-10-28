"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _usuarios = _interopRequireDefault(require("./Routes/usuarios.routes"));

var _productos = _interopRequireDefault(require("./Routes/productos.routes"));

var _pedidos = _interopRequireDefault(require("./Routes/pedidos.routes"));

var app = (0, _express["default"])();
var port = _config["default"].port; //middlewares

app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.set('port', port);
app.use(_usuarios["default"]);
app.use(_productos["default"]);
app.use(_pedidos["default"]);
var _default = app;
exports["default"] = _default;