let todoListData = [
  {id: "a41abaa6-d1e9-4ecb-9d50-e2e55f4d569d", "task":"Get dog food","importance":"medium"},
  {id: "407c100c-d408-4da5-ac4f-057b5b775505", "task":"Apply for new jobs","importance":"high"},
  {id: "a9f2660a-9584-49f6-a250-5e74841d0e11", "task":"Take car to shop","importance":"low"},
  {id: "45ccf5c6-0ba9-43be-9cba-07b8897e6fd8", "task":"Look for a new home","importance":"medium"},
  {id: "29bdb63a-6633-45a4-9e10-1bd060c09827", "task":"Tattoo appointement coming up","importance":"low"},
];

class TodoListModel {
    static getTodoList = () => {
      console.log('\t\tTodoListModel.getTodoList');
      return todoListData;
    };
  
    static getTodo = (id) => {
      console.log(`\t\tTodoListModel.getTodo :: ${id}`);
  
      const foundTodo = todoListData.find(v => id === v.id);
      return foundTodoList;
    };
  
    static createTodo = (todo) => {
      console.log('\t\tTodoListModel.createTodo');
  
      todoListData.push(todo);
  
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
     const vIndex = todoListData.findIndex((v) => {
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