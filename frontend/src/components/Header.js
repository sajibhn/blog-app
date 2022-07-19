import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const [value, setValue] = useState()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    console.log(isLoggedIn)
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
                    {isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' color='warning' sx={{ margin: 1, borderRadius: 10 }}>Logout</Button>}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header