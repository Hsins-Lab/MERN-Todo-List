/*
|--------------------------------------------------------------------------
| Todos Route
|--------------------------------------------------------------------------
|
| [Method]  [Route]
| GET       /api/todos              取得所有待辦
| POST      /api/todos              新增一件待辦
| GET       /api/todos/:id          顯示待辦事項
| POST      /api/todos/:id          完成待辦事項／取消待辦事項
| PATCH     /api/todos/:id          更新待辦事項
| DELETE    /api/todos/:id          刪除待辦事項
| 
*/

const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

// METHOD  : GET
// ROUTE   : /api/todos
// FUNCTION: Get all todos
router.get('/', async (req, res) => {
  try {
    // Find and sort todos with creating time
    const todos = await Todo.find().sort([['createdAt', -1]]);

    res.send(todos);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

// METHOD  : POST
// ROUTE   : /api/todos
// FUNCTION: Add a new todo
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      name: req.body.name,
      createdAt: Date.now()
    });

    await todo.save();
    res.send(todo);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

// METHOD  : GET
// ROUTE   : /api/todos/:id
// FUNCTION: Fetch a todo
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.send(todo);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

// METHOD  : POST
// ROUTE   : /api/todos:id
// FUNCTION: Toggle todo to be done or not
router.post('/:id', async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );

    await todo.save();
    res.send(todo);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

// METHOD  : PATCH
// ROUTE   : /api/todos:id
// FUNCTION: Modify the todo
router.patch('/:id', async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );
    await todo.save();

    res.send(todo);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

// METHOD  : DELETE
// ROUTE   : /api/todos:id
// FUNCTION: Delete the todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.send(todo);
  } catch (err) {
    console.log('[ERROR]');
    console.log(err.message);
  }
});

module.exports = router;
