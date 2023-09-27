import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const AddTodo = (props) => {
    const [item, setItem] = useState("");

    function onInputChange(e) {
        setItem(e.target.value);
    }

    function onButtonClick() {
        let addItem = { id: "", title: item, done: false };
        props.add(addItem); // 텍스트 값을 추가하고
        setItem("");
    }

    function enterKeyEventHandler(e) {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add Todo here"
                        fullWidth
                        onChange={onInputChange}
                        value={item}
                        onKeyDown={enterKeyEventHandler}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={onButtonClick}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo;