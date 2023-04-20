const express = require('express');
const todoListController = require('../Controllers/todoList.controller');
const router = express.Router();

router.get('/', todoListController.getTodoList);
router.get('/:id', todoListController.getTodoList);
router.post('/', todoListController.createTodoList);
router.delete('/:id', todoListaController.deleteTodo);
router.put('/:id', todoListController.replaceTodo);
router.patch('/:id', todoListController.updateTodo);

module.exports = router;
