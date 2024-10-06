import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { drawerWidth, SIDEBAR_CONTENT } from "../common/constants";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
    const navigate = useNavigate()
    const [title, setTitle] = React.useState('React Projects')
    const routeChange = (content) => {
        setTitle(content.title)
        navigate(content.path)
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {
                        SIDEBAR_CONTENT.map((sideBar, index) => (
                            <ListItem key={index} >
                                <ListItemText onClick={() => routeChange(sideBar)}>
                                    {sideBar.title}
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography sx={{ marginBottom: 2 }}>
                    This is a Web page where I'm show casing my projects build using Reactjs, Material UI.
                    Please select from 👈👈👈 and enjoy.
                </Typography>
            </Box>
        </Box>
    );
};




