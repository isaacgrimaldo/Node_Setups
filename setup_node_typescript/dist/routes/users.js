"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const route = express_1.Router();
route.get('/', users_1.getUsers);
route.get('/:id', users_1.getUsers);
route.get('/:id/:nickname', users_1.getUsers);
route.post('/', users_1.postUsers);
route.put('/id', users_1.uptUsers);
route.delete('/id', users_1.deletUsers);
exports.default = route;
//# sourceMappingURL=users.js.map