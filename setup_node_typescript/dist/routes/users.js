"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var route = express_1.Router();
route.get('/', users_1.getUsers);
route.get('/:id', users_1.getUsers);
route.get('/:id/:nickname', users_1.getUsers);
route.post('/', users_1.postUsers);
route.put('/id', users_1.uptUsers);
route.delete('/id', users_1.deletUsers);
exports.default = route;
//# sourceMappingURL=users.js.map