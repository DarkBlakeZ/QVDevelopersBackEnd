"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertProductPedido = exports.getTablePedido = exports.getPedidos = exports.deletePedido = exports.createPedido = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = require("../database/connection");

var getPedidos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query("exec Traer_Pedidos ".concat(id || 0));

          case 6:
            result = _context.sent;
            res.json(result.recordset);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPedidos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPedidos = getPedidos;

var createPedido = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idUser, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idUser = req.body.idUser;
            _context2.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input("idUsuario", _connection.sql.BigInt, idUser).query("exec Crear_Pedido @idUsuario");

          case 6:
            result = _context2.sent;
            res.json(result.recordset);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createPedido(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPedido = createPedido;

var insertProductPedido = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, idPedido, idProduct, cantidad, pool, result;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, idPedido = _req$body.idPedido, idProduct = _req$body.idProduct, cantidad = _req$body.cantidad;
            _context3.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("idPedido", _connection.sql.BigInt, idPedido).input("idProduct", _connection.sql.BigInt, idProduct).input("cantidad", _connection.sql.Int, cantidad).query("exec Insertar_Producto @idPedido, @idProduct, @cantidad");

          case 6:
            result = _context3.sent;
            res.json(result.recordset);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function insertProductPedido(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.insertProductPedido = insertProductPedido;

var getTablePedido = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().query("exec Listar_Pedidos ".concat(id || 0));

          case 6:
            result = _context4.sent;
            res.json(result.recordset);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getTablePedido(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTablePedido = getTablePedido;

var deletePedido = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().query("exec Eliminar_Producto_Pedido ".concat(id));

          case 6:
            result = _context5.sent;
            res.json(result.recordset);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deletePedido(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePedido = deletePedido;