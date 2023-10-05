import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React, { useState } from 'react';

const Todo = (props) => {
    const [state, setState] = useState({ item: props.item, readOnly: true });

    function deleteEventHandler() {
        props.delete(state.item);
        props.update(state.item);
    }

    function offReadnOnleyMode(e) {
        console.log("Event!", state.readOnly);
        setState({ ...state, readOnly: false });
    }

    function enterKeyEventHandler(e) {
        if (e.key === 'Enter') {
            setState({ ...state, readOnly: true });
            props.update(state.item);
        }
    }

    function editEventHandler(e) {
        const thisItem = state.item;
        thisItem.title = e.target.value;
        setState({ ...state, item: thisItem });
    }

    function checkboxEventHandler(e) {
        console.log("check box event call");
        const thisItem = state.item;
        thisItem.done = thisItem.done ? false : true;
        setState({ item:thisItem, readOnly: false });
        props.update(state.item);
    }

    return (
        <ListItem>
            <Checkbox checked={state.item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked", readOnly: state.readOnly }}
                    type='text'
                    id={state.item.id}
                    name={state.item.id}
                    value={state.item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={offReadnOnleyMode}
                    onChange={editEventHandler}
                    onKeyDown={enterKeyEventHandler}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={deleteEventHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}


export default Todo;