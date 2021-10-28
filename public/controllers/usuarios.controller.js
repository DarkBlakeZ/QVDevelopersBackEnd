"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.loginUser = exports.getUser = exports.deleteUser = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = require("../database/connection");

var getUser = /*#__PURE__*/function () {
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
            return pool.request().query("exec Traer_Usuarios ".concat(id || 0));

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

  return function getUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var loginUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, usuario, password, pool, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, usuario = _req$body.usuario, password = _req$body.password;
            _context2.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input('usuario', _connection.sql.VarChar, usuario).input('password', _connection.sql.VarChar, password).query("exec Login_Usuario @usuario, @password");

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

  return function loginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginUser = loginUser;

var createUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, usuario, password, nombre, pool, result;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, usuario = _req$body2.usuario, password = _req$body2.password, nombre = _req$body2.nombre;
            _context3.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('usuario', _connection.sql.VarChar, usuario).input('password', _connection.sql.VarChar, password).input('nombre', _connection.sql.VarChar, nombre).query("exec Crear_Usuario @usuario, @password, @nombre ");

          case 6:
            result = _context3.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Usuario creado correctamente"
              });
            } else {
              res.json({
                message: "Error al crear el usuario"
              });
            }

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body3, id, usuario, password, nombre, pool, result;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body3 = req.body, id = _req$body3.id, usuario = _req$body3.usuario, password = _req$body3.password, nombre = _req$body3.nombre;
            _context4.next = 3;
            return (0, _connection.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('ID', _connection.sql.BigInt, id).input('usuario', _connection.sql.VarChar, usuario).input('password', _connection.sql.VarChar, password).input('nombre', _connection.sql.VarChar, nombre).query("exec Actualizar_Usuario @ID, @usuario, @password, @nombre ");

          case 6:
            result = _context4.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Usuario actualizado correctamente"
              });
            } else {
              res.json({
                message: "Error al actualizar el usuario"
              });
            }

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;

            if (!id) {
              _context5.next = 11;
              break;
            }

            _context5.next = 4;
            return (0, _connection.getConnection)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input('ID', _connection.sql.BigInt, id).query("exec Eliminar_Usuario @ID");

          case 7:
            result = _context5.sent;

            if (result.rowsAffected[0] > 0) {
              res.json({
                message: "Usuario eliminado correctamente"
              });
            } else {
              res.status(400).json({
                message: "Error al eliminar el usuario"
              });
            }

            _context5.next = 12;
            break;

          case 11:
            res.status(400).json({
              message: "Error al eliminar el usuario se necesita un /id"
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;