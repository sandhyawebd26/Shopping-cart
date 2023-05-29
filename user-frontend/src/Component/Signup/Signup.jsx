import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email:"",
    password: "",
    phone:"",
    age: "",
  
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    axios
      .post("http://localhost:4500/api/register", {
        firstname: data.firstname,
        lastname:data.lastname,
        email: data.email,
        password: data.password,
        phone: data.phone,
        age:data.age
     
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Service error");
      });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphAw-2T1N_xzds9ZoZogt6LxMILaTKgo1TA&usqp=CAU)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="firstname"
                  value={data.firstname}
                  label=" Name"
                  type="text"
                  id="name"
                  autoComplete="current-name"
                  onChange={handleInputs}
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="lastname"
                  value={data.lastname}
                  label=" Name"
                  type="text"
                  id="name"
                  autoComplete="current-name"
                  onChange={handleInputs}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  value={data.email}
                  label="Email Address"
                  type="email"
                  id="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleInputs}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={data.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputs}
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  value={data.phone}
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="current-phone"
                  onChange={handleInputs}
                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="age"
                  value={data.age}
                  label="age"
                  type="age"
                  id="age"
                  autoComplete=""
                  onChange={handleInputs}
                />
               
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}