import _regeneratorRuntime from "@babel/runtime-corejs2/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs2/helpers/asyncToGenerator";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import _Reflect$construct from "@babel/runtime-corejs2/core-js/reflect/construct";
import _inherits from "@babel/runtime-corejs2/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/getPrototypeOf";
import _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";
import _Promise from "@babel/runtime-corejs2/core-js/promise";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import nav, { mapping } from './nav';
var name = "Attamjot Singh";

var printNumbers = function printNumbers(a, b) {
  return a + b;
};

[1, 2, 3].map(function (n) {
  return n + 1;
});

var pro = function pro() {
  return new _Promise(function (resolve, reject) {
    if (name) {
      resolve("resolved");
    } else {
      reject("reject");
    }
  });
};

pro().then(function (data) {
  console.log("data", data);
});

var A = function A() {
  _classCallCheck(this, A);
};

var B = /*#__PURE__*/function (_A) {
  _inherits(B, _A);

  var _super = _createSuper(B);

  function B() {
    _classCallCheck(this, B);

    return _super.apply(this, arguments);
  }

  return B;
}(A);

function getPost() {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return console.log("Hi awaiting");

          case 2:
            response = _context.sent;
            console.log('done!!!');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPost.apply(this, arguments);
}

getPost().then(function () {
  console.log("finally done!!!");
});
console.log(name);
console.log(printNumbers(10, 20));
console.log("nav", nav);