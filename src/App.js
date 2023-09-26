import React, { useState } from 'react';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'
import { Container, List, Paper } from '@material-ui/core';

const App = () => {
  const [items, setItems] = useState([
    { id: "ID-0", title: "Todo 1", done: false },
    { id: "ID-1", title: "Todo 2", done: false }]);

  // add 함수 추가
  function add(item) {
    item.id = "ID-" + (items.length + 1); // Key를 위한 id 추가
    item.done = false;
    setItems([...items, item]); // update state
    console.log(items);
  }

  // delete 함수 추가
  function deleteList(item) {
    console.log(item.id);
    setItems(items.filter(e => e.id !== item.id));
    console.log("items:",items);
  }

  var todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item, idx) => (
          <Todo item={item} key={idx} delete={deleteList} />
        ))};
      </List>
    </Paper>
  );

  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo add={add} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  )
}


export default App;
