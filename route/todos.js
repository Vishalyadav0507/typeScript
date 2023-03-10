"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    try {
        res.status(200).json({ "todos": todos });
    }
    catch (err) {
        res.status(401).json({ err: err });
    }
});
router.post('/todo', (req, res, next) => {
    try {
        const newTodo = {
            id: new Date().toISOString(),
            text: req.body.text
        };
        todos.push(newTodo);
        res.status(201).json({ message: "successfully added", todo: newTodo, todos: todos });
        console.log(todos);
    }
    catch (err) {
        res.status(401).json({ err: err });
    }
});
router.post('/deleteTodo/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        todos = todos.filter(todoItem => todoItem.id !== id);
        res.status(201).json({ message: "successfully deleted" });
    }
    catch (err) {
        res.status(401).json({ err: err });
    }
});
router.put('/editTodo/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const TodoIndex = todos.findIndex(todoIndex => todoIndex.id === id);
        if (TodoIndex >= 0) {
            todos[TodoIndex] = {
                id: todos[TodoIndex].id,
                text: req.body.text
            };
            res.status(201).json({ message: "updated successfully", todo: todos[TodoIndex], todos: todos });
        }
        else {
            res.status(401).json({ err: "did not update todo" });
        }
    }
    catch (err) {
        res.status(501).json({ err: err });
    }
});
exports.default = router;
