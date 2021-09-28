"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
class Server {
    constructor() {
        this.apiPaths = {
            user: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || 8000;
        this.routers();
    }
    ;
    routers() {
        this.app.use(this.apiPaths.user, users_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run on PORT:' + this.port);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=Server.js.map