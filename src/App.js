import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'
import { AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography } from '@material-ui/core';
import { call, edituser, signout } from './service/ApiService'

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

    function allDelete() {
        items.forEach(element => {
            if (element.done === true) {
                deleteList(element);
            }
        });
    }

    useEffect(() => { // 새로고침
        call("/todo", "GET", null).then((response) => {
            setItems(response.data);
            setLoading(false);
        });
    }, []);

    var todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item, idx) => (
                    <Todo item={item} key={item.id} delete={deleteList} update={update} />
                ))};
            </List>
        </Paper>
    );

    var navigationBar = (
        <AppBar position='static'>
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant='h6'>오늘의 할일</Typography>
                    </Grid>
                    <Grid item>
                        <Button color='inherit' onClick={edituser}>
                            Edit
                        </Button>
                        <Button color='inherit' onClick={signout}>
                            logout
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );

    // loading 중이 아닐때
    var todoListPage = (
        <div>
            {navigationBar}
            <Container maxWidth="md">
                <AddTodo add={add} />
                <div className='TodoList'>{todoItems}</div>
            </Container>
            <Button
                onClick={allDelete}
                variant="contained"
                color="primary">
                일괄 삭제
            </Button>
        </div>
    )

    // loading 중일때
    var loadingPage = <h1>로딩중...</h1>
    var content = loadingPage;
    if (!loading) {
        content = todoListPage;
    }

    return (
        <div className='App'>
            {content}
        </div>
    )
}


export default App;
