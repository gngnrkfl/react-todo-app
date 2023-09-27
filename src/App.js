import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'
import { Container, List, Paper } from '@material-ui/core';
import { call } from './service/ApiService'

const App = () => {
    const [items, setItems] = useState([]);

    // add 함수 추가
    function add(item) {
        call("/todo", "POST", item).then((response) =>
            setItems(response.data)
        );
        console.log(items);
    }

    // delete 함수 추가
    function deleteList(item) {
        call("/todo", "DELETE", item).then((response) =>
            setItems(response.data)
        );
    }

    function update(item) {
        call("/todo", "PUT", item).then((response) =>
            setItems(response.data)
        );
    }

    useEffect(() => { // 새로고침
        call("/todo", "GET", null).then((response) => {
            setItems(response.data);
        });
    }, []);

    var todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item, idx) => (
                    <Todo item={item} key={item.id} delete={deleteList} update={update}/>
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
