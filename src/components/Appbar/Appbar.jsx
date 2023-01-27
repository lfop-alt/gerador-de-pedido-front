import * as React from 'react';
import { AppBar, Box, Button, CssBaseline, IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const icones = [<ArticleIcon />, <ProductionQuantityLimitsIcon />];

const drawerWidth = 240;

function ClippedDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar sx={{ marginTop: '20px' }}>
        <Link to="/">
          <img
            src="https://www.controlid.com.br/assets/images/logo.png"
            alt=""
          />
        </Link>
      </Toolbar>
      <Box sx={{ overflow: 'auto', color: '#fff', marginTop: '0px' }}>
        <List>
          {['Pedidos', 'Produtos'].map((text, index) => (
            <Link
              to={`/${text.toLowerCase()}`}
              style={{ textDecoration: 'none' }}
              key={text}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    {icones[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: '#fff' }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
    </>
  );

  const navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: '#3d3d3d',
          border: 'none',
        }}
      >
        <Toolbar
          sx={{
            color: '#fff',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box>
            <Button
              sx={{
                color: '#fff',
              }}
              onClick={handleClickLogout}
            >
              <LogoutIcon /> Sair
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#3d3d3d',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#3d3d3d',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ClippedDrawer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  window: PropTypes.func,
};

export default ClippedDrawer;
