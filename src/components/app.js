import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import TodoList from './todo_list';

const App = () => (
    <div className="container">
      <h1 className="center-align">To Do List</h1>
      <hr/>
      <TodoList/>
    </div>
);

export default App;
