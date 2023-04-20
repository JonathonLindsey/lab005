class TodoListModel {
    static getTodoList = () => {
      console.log('\t\tTodoListModel.getTodoList');
      return todolistData;
    };
  
    static getTodo = (id) => {
      console.log(`\t\tTodoListModel.getTodo :: ${id}`);
  
      const foundTodo = todoListData.find(v => id === v.id);
      return foundTodoList;
    };
  
    static createTodo = (todo) => {
      console.log('\t\tTodoListModel.createTodo');
  
      todoListData.push(Todo);
  
      return todo;
    };
  
    static deleteTodo = (id) => {
      console.log('\t\tTodoListModel.deleteTodo');
  
      const originalTodoCount = todoListData.length;
      todoListData = todoListData.filter(v => id !== v.id);
  
      if (todoListData.length === originalTodoCount) {
        return false;
      }
  
      return true;
    };
  
    static replaceTodo = (id, todo) => {
      console.log('\t\tTodoListModel.replaceTodo');
     const vIndex = TodoListData.findIndex((v) => {
        return v.id === id;
      });
  
      if (vIndex === -1) {
        return false;
      }
  
      todoListData[vIndex] = todo;
      return todo;
    };
  
    static updateTodo = (id, todo) => {
      console.log('\t\tTodoListModel.updateTodo');
     const vIndex = todoListData.findIndex((v) => {
        return v.id === id;
     });
  
     if (vIndex === -1) {
      return false;
    }
  
    Object.keys(todo).forEach((key) => {
      TodoListData[vIndex][key] = todo[key];
    });
  
      return todoListData[vIndex];
    };
  }
  
  module.exports = TodoListModel;