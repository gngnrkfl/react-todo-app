import React from 'react';
import './App.css';
import Todo from './Todo'
import { List, Paper } from '@material-ui/core';

class App extends React.Component {
  constructor(props) { //매개변수 props 생성자
    super(props); // 매개변수 pros 초기화
    this.state = { // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
      item: [
        { id: 0, title: "Todo 1", done: false },
        { id: 1, title: "Todo 2", done: false }
      ]
    };
  } render() {
    // 자바스크립트가 제공하는 map함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러개 생성
    // todoItems에 this.state.items.length 가 0보다 크다면 true 이므로 && 뒤에 값을 넘겨준다. 
    // totoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; 이렇게 해도 같은 결과이다. 조건선택문 ? ternary operator
    var todoItems = this.state.item.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.item.map((item, idx) => (
            <Todo item={item} key={idx} />
          ))};
        </List>
      </Paper>
    )

    return <div className='App'>{todoItems}</div>;
  }
}


export default App;
