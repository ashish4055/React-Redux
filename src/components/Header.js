import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Container, IconButton } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Outlet } from 'react-router-dom'
const Header = () => {
    return (
        <Container maxWidth='xl' disableGutters sx={{ backgroundColor: 'whitesmoke' }}>
            <Box>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <IconButton size='small' color='inherit'>
                            <LocalMallIcon />
                        </IconButton>
                        <Typography variant="h6">
                            MyStore
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box mx={5} my={4} sx={{ height: "95vh" }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Container>
    )
}

export default Header