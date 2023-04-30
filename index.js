const express = require('express');
const bodyParser = require('body-parser');
const todoListRouter = require ('./routes/todo.routes')
const colorMiddleware = require ('./middleware/supportedColors');
const errorHandlerMiddleware = require('./middleware/errorHandler');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(colorMiddleware());
app.post('*', colorMiddleware());
app.put('*', colorMiddleware());
app.patch('*', colorMiddleware());

app.use('/api/v1/todoList', todoListRouter);

app.use(errorHandlerMiddleware());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});