"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
  constructor() {
    this.PORT = process.env.PORT;
    this.app = (0, _express.default)();
    this.middleware();
    this.routers();
  }

  middleware() {
    this.app.use((0, _cors.default)());
    this.app.use(_express.default.json());
    this.app.use(_express.default.static('public'));
  }

  routers() {
    this.app.get('/hola', (req, res) => {
      res.status(200).send('Hola');
      console.log('hola');
    });
  }

  listen() {
    this.app.listen(this.PORT, err => {
      if (err) throw new Error('Server OFFLINE');
      console.log('Server running on port ' + this.PORT);
    });
  }

}

var _default = Server;
exports.default = _default;
//# sourceMappingURL=Server.js.map