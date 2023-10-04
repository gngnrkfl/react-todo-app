import React, { useEffect, useState } from "react";
import { signin } from "./service/ApiService";
import { Button, Checkbox, Container, Grid, Link, TextField, Typography } from "@material-ui/core";
import { useCookies } from "react-cookie";

const Login = (props) => {
    const [userid, setUserid] = useState("");
    /*====== Cookie 관련 선언======*/
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]); //Cookies 이름
    const [isRemember, setIsRemember] = useState(false); //아이디 저장 체크박스 체크 유무

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");

        // ApService의 signin 메소드를 사용해 로그인
        signin({ email: email, password: password });
    }

    function handleOnChange(e) {
        setIsRemember(e.target.checked);
        console.log(userid);
        if (e.target.checked) {
            setCookie('rememberUserId', userid, { maxAge: 2000 });
        } else {
            removeCookie('rememberUserId');
        }
    }

    useEffect(() => {
        console.log(cookies.rememberUserId);
        /*저장된 쿠키값이 있으면, CheckBox TRUE 및 UserID에 값 셋팅*/
        if (cookies.rememberUserId !== undefined) {
            setUserid(cookies.rememberUserId);
            setIsRemember(true);
        }
    }, []);

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <Grid container spacing={2}>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            value={userid}
                            onChange={(e) => {setUserid(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Checkbox checked={isRemember} onChange={handleOnChange} />
                        아이디 저장
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            로그인
                        </Button>
                    </Grid>
                    <Link href="/signup" variant="body2">
                        <Grid item>
                            계정이 없습니까? 여기서 가입하세요
                        </Grid>
                    </Link>
                </Grid>
            </form>
        </Container>);
}

export default Login;