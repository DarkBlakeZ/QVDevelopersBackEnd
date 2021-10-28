"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProduct = exports.deleteProduct = exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = require("../database/connection");

var getProduct = /*#__PURE__*/function () {
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
            return pool.request().query("exec Traer_Productos ".concat(id || 0));

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

  return function getProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var createProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, descripcion, valor, pool, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, descripcion = _req$body.descripcion, valor = _req$body.valor;
            _context2.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input('descripcion', _connection.sql.VarChar, descripcion).input('valor', _connection.sql.Money, valor).query("exec Crear_Producto @descripcion, @valor");

          case 6:
            result = _context2.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Producto creado correctamente"
              });
            } else {
              res.json({
                message: "Error al crear el producto"
              });
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, id, descripcion, valor, pool, result;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, descripcion = _req$body2.descripcion, valor = _req$body2.valor;
            _context3.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('ID', _connection.sql.BigInt, id).input('Descripcion', _connection.sql.VarChar, descripcion).input('Valor', _connection.sql.Money, valor).query("exec Actualizar_Producto @ID, @Descripcion, @Valor");

          case 6:
            result = _context3.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Producto actualizado correctamente"
              });
            } else {
              res.json({
                message: "Error al actualizar el producto"
              });
            }

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;

            if (!id) {
              _context4.next = 12;
              break;
            }

            _context4.next = 5;
            return (0, _connection.getConnection)();

          case 5:
            pool = _context4.sent;
            _context4.next = 8;
            return pool.request().input('ID', _connection.sql.BigInt, id).query("exec Eliminar_Producto @ID");

          case 8:
            result = _context4.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Producto eliminado correctamente"
              });
            } else {
              res.status(400).json({
                message: "Error al eliminar el producto"
              });
            }

            _context4.next = 13;
            break;

          case 12:
            res.status(400).json({
              message: "Error al eliminar el producto se necesita un /id"
            });

          case 13:
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);
            res.status(400).json({
              message: "Este producto ya esta relacionado a un pedido, no puede ser eliminado",
              err: _context4.t0
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 15]]);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;