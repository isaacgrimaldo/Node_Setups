"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Server = _interopRequireDefault(require("./Server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var newServer = new _Server.default();
newServer.listen();
//# sourceMappingURL=app.js.map