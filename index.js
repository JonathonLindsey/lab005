const express = require('express');
const bodyParser = require('body-parser');
const todoListRouter = require('./routes/todo.routes');
const colorToHexMiddleware = require('./middleware/supportedColors');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const db = require('./lib/database');
const todoListData = require('./models/todoList.model');

const port = 4000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(colorToHexMiddleware());
app.post('*', colorToHexMiddleware());
app.put('*', colorToHexMiddleware());
app.patch('*', colorToHexMiddleware());

app.use('/api/v1/todoList', todoListRouter);

app.use(errorHandlerMiddleware());

const dbConfig = {
  hostname: '127.0.0.1',
  port: 27017,
  database: 'TodosList',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 3,
  },
};

async function performInsertion() {
  await db.configure(dbConfig);

  await db.insertData('TodosList', todoListData);

  await db.disconnect();
}

performInsertion();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
