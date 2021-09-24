"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./routes/users"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            user: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || 8000;
        this.routers();
    }
    ;
    Server.prototype.routers = function () {
        this.app.use(this.apiPaths.user, users_1.default);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Server run on PORT:' + _this.port);
        });
    };
    ;
    return Server;
}());
;
exports.default = Server;
//# sourceMappingURL=Server.js.map