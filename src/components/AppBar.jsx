import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'
import GavelIcon from '@mui/icons-material/Gavel';
import BiotechIcon from '@mui/icons-material/Biotech';
import { download } from './../util'

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    opened:false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, opened: open });
  };

  const list = () => (
    <Box
      sx={{width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink href="/home" button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className="link-in-nav" primary="Home"/>          
        </ListItemLink>
        <ListItemLink href="/howWork" button>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText className="link-in-nav" primary="Come funziona"/>          
        </ListItemLink>
        <ListItemLink href="/tecnology" button>
          <ListItemIcon>
            <BiotechIcon />
          </ListItemIcon>
          <ListItemText className="link-in-nav" primary="Tecnologie utilizzate"/>          
        </ListItemLink>
        
      </List>
    </Box>
  );
  return (    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Backup Env
            </Typography>
          <Button color="inherit" onClick={ download }>Download</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='left'
          open={state['opened']}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </Box>    
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}