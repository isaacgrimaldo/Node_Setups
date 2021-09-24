"use strict";
/**
 *  path = /api/user/;
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUsers = exports.uptUsers = exports.postUsers = exports.getUsers = void 0;
var getUsers = function (req, res) {
    var _a = req.params, id = _a.id, nickname = _a.nickname;
    return res.status(200).json({
        msg: 'Hello Word',
        id: id,
        nickname: nickname
    });
};
exports.getUsers = getUsers;
var postUsers = function (req, res) {
    var body = req.body;
    return res.status(201).json({
        msg: 'created user',
        body: body
    });
};
exports.postUsers = postUsers;
var uptUsers = function (req, res) {
    var params = req.params, body = req.body;
    var id = params.id;
    return res.status(200).json({
        msg: 'update user',
        id: id,
        body: body
    });
};
exports.uptUsers = uptUsers;
var deletUsers = function (req, res) {
    var id = req.params.id;
    return res.status(200).json({
        msg: 'deleted user',
        id: id,
    });
};
exports.deletUsers = deletUsers;
//# sourceMappingURL=users.js.map