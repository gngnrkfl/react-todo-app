import React from 'react';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'
import { Container, List, Paper } from '@material-ui/core';

class App extends React.Component {
  constructor(props) { //매개변수 props 생성자
    super(props); // 매개변수 pros 초기화
    this.state = { // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
      items: [
        { id: 0, title: "Todo 1", done: false },
        { id: 1, title: "Todo 2", done: false }
      ]
    };
  } 
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // Key를 위한 id 추가
    item.done = false;
    thisItems.push(item);
    this.setState({items:thisItems}); // update state
    console.log('items', this.state.items);
  }
  render() {
    // 자바스크립트가 제공하는 map함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러개 생성
    // todoItems에 this.state.items.length 가 0보다 크다면 true 이므로 && 뒤에 값을 넘겨준다. 
    // totoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; 이렇게 해도 같은 결과이다. 조건선택문 ? ternary operator
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={idx} />
          ))};
        </List>
      </Paper>
    )

    return (
      <div className='App'>
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    )
  }
}


export default App;
