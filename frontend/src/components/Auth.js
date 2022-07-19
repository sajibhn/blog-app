import { TextField, Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { authActions } from "../store";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    const sendRequest = async (type = "login") => {
        const res = await axios
            .post(`http://localhost:5000/api/user/${type}`, {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
            })
            .catch((err) => console.log(err));

        const data = await res.data;
        console.log(data);
        return data;
    };

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))


    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            sendRequest('signup')
                .then((data) => localStorage.setItem("userId", data.user._id))
                .then(() => dispatch(authActions.login()))
                .then(() => navigate("/blogs"))
                .then((data) => console.log(data))
        } else {
            sendRequest()
                .then((data) => localStorage.setItem("userId", data.user._id))
                .then(() => dispatch(authActions.login()))
                .then(() => navigate("/blogs"))
                .then((data) => console.log(data))
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <Box display="flex"
                flexDirection="column" alignItems="center"
                justifyContent="center"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius={5}
            >
                <Typography variant='h3' padding={3} textAlign="center">
                    Login
                </Typography>
                {isSignUp && <TextField placeholder='name' name="name" value={inputs.name} type="text" margin='normal' onChange={handleChange} />}
                <TextField placeholder='email' type="email" name="email" value={inputs.email} margin='normal' onChange={handleChange} />
                <TextField placeholder='password' type="password" name="password" value={inputs.password} margin='normal' onChange={handleChange} />
                <Button variant='contained' type="submit" sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>Submit</Button>
                <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ borderRadius: 3, marginTop: 3 }} >Change to {isSignUp ? 'Login' : 'SignUp'}</Button>
            </Box>
        </form>
    )
}

export default Auth