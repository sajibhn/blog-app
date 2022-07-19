import { TextField, Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

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
                <Button variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>Submit</Button>
                <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ borderRadius: 3, marginTop: 3 }} >Change to {isSignUp ? 'Login' : 'SignUp'}</Button>
            </Box>
        </form>
    )
}

export default Auth