import React from 'react';
import './App.scss';
import { Provider } from 'react-redux'
import {store} from "./store/store";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import './App.scss'
import Filter from "./components/Filter/Filter";
import ErrorTodo from "./components/ErrorTodo/ErrorTodo";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <div>TODO List</div>
              <ToDoInput/>
              <Filter/>
             <ToDoList/>
              <ErrorTodo/>
          </div>
      </Provider>

  );
}

export default App;
