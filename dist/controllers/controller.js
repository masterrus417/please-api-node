"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
// Моковые данные
var users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
// Контроллер
var getUsers = function (req, res) {
    res.json(users);
};
exports.getUsers = getUsers;
var getUserById = function (req, res) {
    var userId = parseInt(req.params.id);
    var user = users.find(function (user) { return user.id === userId; });
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.getUserById = getUserById;
