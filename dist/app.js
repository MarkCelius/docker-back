"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = require("dotenv");
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _index = _interopRequireDefault(require("./routes/index.js"));
(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set("port", process.env.PORT);
app.use((0, _cors["default"])());
app.use("/", _index["default"]);
var _default = exports["default"] = app;