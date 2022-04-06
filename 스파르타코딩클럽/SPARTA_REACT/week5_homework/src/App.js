import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";

import BottomAppBar from './pages/Create'
import CreatePages from './pages/CreatePage'


const cards = [1, 2, 3];
const theme = createTheme();

function App() {
  //회원가입
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  //로그인
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.meassage);
    }
  };

  //로그아웃
  const logout = async () => {
    await signOut(auth);
  };

  //Modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [openSignup, setOpenSignup] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const SignUpOpen = () => {
    setOpenSignup(true);
  };
  const SignUpClose = () => {
    setOpenSignup(false);
  };
  const LoginOpen = () => {
    setOpenLogin(true);
  };
  const LoginClose = () => {
    setOpenLogin(false);
  };


let Logoutbtn = () => {
  return(
    <></>
  )
}

if(user){
  Logoutbtn = () => {
    return(
      <button onClick={logout}>LogOut</button>
    )
  }
}


  return (
    <div className="App">
<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              week5_homework
            </Typography>
            <>
      <Button color="inherit" onClick={SignUpOpen}>
          Register
        </Button>
        <Modal
          open={openSignup}
          onClose={SignUpClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              회원가입
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <span>
                <input
                  placeholder="Email"
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                  }}
                />
                <input
                  placeholder="EmailPassword"
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                />
                <button onClick={register}>CreateUser</button>
                </span>
            </Typography>
          </Box>
        </Modal>

        <Button color="inherit" onClick={LoginOpen}>
          Login
        </Button>
        <Modal
          open={openLogin}
          onClose={LoginClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div id="modal-modal-title" variant="h6" component="h2">
              Login
            </div>
            <div id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <input
                  placeholder="Email"
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
                <input
                  placeholder="Password"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                />
                <button onClick={login}>Login</button>
                <div>User Logged In:</div>
                <div>{user?.email}</div>

              </div>
            </div>
          </Box>
        </Modal>
        <Logoutbtn/>
      </>
          </Toolbar>
        </AppBar>
      </Box>

      <ThemeProvider theme={theme}>

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={12} md={12}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={
                        {
                          // 16:9
                          // pt: '56.25%',
                        }
                      }
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* End footer */}
      </ThemeProvider>
      <BottomAppBar user={user}/>
    <BrowserRouter>
      <Routes>
        <Route path="/"/> 
        <Route path="/create" authenticated={true} element={<CreatePages />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
