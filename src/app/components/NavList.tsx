'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { usePathname , useRouter} from 'next/navigation'

import Link from 'next/link'

import styles from '@/styles/header.module.scss'

import { UserRouter } from '@/types'

import { useUser, UserProfile } from '@auth0/nextjs-auth0/client';

import { userReducer } from '@/reducer/userReducer'

import {initialState, ActionKind} from '@/types/reducer'

import AppEnv from '@/app/data/app.env.json'

const { useEffect, useCallback, useReducer, useState } = React


const WebSiteName = AppEnv['WebSiteName']

const logo = AppEnv['Logo']

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ResponsiveAppBar({ pages, fixNav }: { pages: Array<UserRouter>, fixNav: Array<UserRouter>, }) {
  const pathname = usePathname()

  const router = useRouter()

  const { user } = useUser();

  const [userState, dispatch] = useReducer(userReducer, initialState);

  const [settings, setSettings] = useState<Array<UserRouter>>(
    [
      { name: 'Home', id: 1, path: '/' },
      { name: 'Logout', id: 3, path: '/api/auth/logout' },
    ]
  )


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenu = (setting: UserRouter) => {
    setAnchorElUser(null);
    if (setting?.name === 'Logout') {
      
      console.log(user, 'Logout')
      
    }
    router.push(setting?.path)
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={styles.colivingHead}>
        <Toolbar disableGutters className='display-block'>

          {/* logo */}
          <div className='flex justify-between px-24'>
          
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
            
                
              <div className='display-block'>
                {logo && (<a className={styles.bcBrandLogo} href="/"></a> )}
                  <div className={styles.logoColor}>{WebSiteName} </div>
                </div>
            
            </Typography>
              
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {
                !user && (
                  <a href="/api/auth/login" className={styles.logoColor}>Login</a>
                )
              }
              {
                user && (
                  <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user.picture && (
                    <Avatar alt="Remy Sharp" src={user.picture}/>
                  )}
                    
                  </IconButton>
                </Tooltip>
                )
              }
             

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.id} onClick={() => handleUserMenu(setting)}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </div>

          {/* service  */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            <div className={styles.colivingNav} >

            <Button
   
                onClick={handleCloseNavMenu}
                className={`link ${pathname === '/'|| pathname === '' ? styles.navActive : ''}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >

                <Link  href='/' className={`link ${pathname === '/' || pathname === ''? styles.linkActive : ''}`}>
                  <HomeIcon  />
                </Link>
           
              </Button>

            {pages && pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                className={`link ${pathname === page.path ? styles.navActive : ''}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {
                  page.path && 
                  <Link href={page.path} className={`link ${pathname === page.path ? styles.linkActive : ''}`}>
                    {page.name}
                  </Link>
                }


           
              </Button>
            ))}

            </div>

          </Box>

          


          {/* cell phone */}

          {/* logo */}
          

          
          <div className='flex justify-between '>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="success"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key={'home'} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link className={`link ${pathname === '/' || pathname === ''?  styles.linkActive : ''}`} href={'/'}>
                    {'Home'}
                  </Link>
                  </Typography>
                </MenuItem>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {
                        page.path &&
                        <Link className={`link ${pathname === page.path ? styles.linkActive : ''}`} href={page.path}>
                          {page.name}
                        </Link>
                      }

                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
         
            {
                !user && (
                  <a href="/api/auth/login" className={styles.logoColor}>Login</a>
                )
              }
              {
                user && (
                  <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user.picture && (
                    <Avatar alt="Remy Sharp" src={user.picture}/>
                  )}
                    
                  </IconButton>
                </Tooltip>
                )
              }
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.id} onClick={() =>handleUserMenu(setting)}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
   

    

        </Toolbar>

   
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;