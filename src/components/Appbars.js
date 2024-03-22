import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';// eslint-disable-next-line
import Button from '@mui/material/Button';// eslint-disable-next-line
import IconButton from '@mui/material/IconButton';// eslint-disable-next-line
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EcoSwap Notifications
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}