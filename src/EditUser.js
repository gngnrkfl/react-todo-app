import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { edit } from "./service/ApiService";

const EditUser = () => {
    function back() {
        window.location.href = "/";
    }

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        edit({ email: email, username: username, password: password }).then((res) => {
            window.location.href = "/login";
        });
    }

    var editform = (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소"
                        autoFocus
                        value={localStorage.getItem('email')}
                        aria-readonly
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="사용자 이름"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="current-password"
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="패스워드"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                        정보변경
                    </Button>
                </Grid>
            </form>
        </Container>
    );

    var navigationBar = (
        <AppBar position='static'>
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant='h6'>유저 정보 수정</Typography>
                    </Grid>
                    <Grid item>
                        <Button color='inherit' onClick={back}>
                            뒤로가기
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );

    return (
        <div>
            {navigationBar}
            {editform}
        </div>
    )
}

export default EditUser;