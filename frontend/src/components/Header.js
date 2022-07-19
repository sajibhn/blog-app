import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from "../store";
const Header = () => {
    const [value, setValue] = useState()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <Typography variant="h4">BlogsApp</Typography>
                {isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight='auto'>
                    <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                    </Tabs>
                </Box>}
                <Box display="flex" marginLeft="auto">
                    {!isLoggedIn && <>
                        <Button
                            LinkComponent={Link} to="/auth"
                            variant='contained'
                            color='warning'
                            sx={{ margin: 1, borderRadius: 10 }}
                        >Login</Button>
                        <Button LinkComponent={Link} to="/auth" variant='contained' color='warning' sx={{ margin: 1, borderRadius: 10 }}>Signup</Button>
                    </>}
                    {isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' color='warning' onClick={() => dispatch(authActions.logout())} sx={{ margin: 1, borderRadius: 10 }}>Logout</Button>}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header