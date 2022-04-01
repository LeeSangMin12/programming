import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {

  const login = () => {
    setCookie("user_id", id, 3);
    setCookie("user_pwd", pwd, 3);
  };
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

 
  return (
    <React.Fragment>
      <Grid padding={16}>
        <Text type="heading">로그인 페이지</Text>
      </Grid>
      <Grid padding={16}>
        <Input
          value={id}
          onChange={changeId}
          placeholder="아이디를 입력하세요."
        />
        <Input
          value={pwd}
          onChange={changePwd}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </Grid>

      <Button
        __click={() => {
          login();
        }}
      >
        로그인
      </Button>
    </React.Fragment>
  );
};

export default Login;
