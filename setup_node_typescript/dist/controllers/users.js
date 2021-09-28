"use strict";
/**
 *  path = /api/user/;
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUsers = exports.uptUsers = exports.postUsers = exports.getUsers = void 0;
const getUsers = (req, res) => {
    const { id, nickname } = req.params;
    return res.status(200).json({
        msg: 'Hello Word',
        id,
        nickname
    });
};
exports.getUsers = getUsers;
const postUsers = (req, res) => {
    const { body } = req;
    return res.status(201).json({
        msg: 'created user',
        body
    });
};
exports.postUsers = postUsers;
const uptUsers = (req, res) => {
    const { params, body } = req;
    const { id } = params;
    return res.status(200).json({
        msg: 'update user',
        id,
        body
    });
};
exports.uptUsers = uptUsers;
const deletUsers = (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        msg: 'deleted user',
        id,
    });
};
exports.deletUsers = deletUsers;
//# sourceMappingURL=users.js.map