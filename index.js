const express = require('express');
const bodyParser = require('body-parser');
const todoListRouter = require('./routes/todoList.routes');
const paintMiddleware = require('./middleware/supportedPaint');
const errorHandlerMiddleware = require('./middleware/errorHandler');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.post('*',todoMiddleware());
app.put('*', todoMiddleware());

app.use('/api/v1/todoList', todoRouter);

app.use(errorHandlerMiddleware());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});