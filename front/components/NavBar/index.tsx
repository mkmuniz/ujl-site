import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useStyles } from './style';
import { League_Spartan } from '@next/font/google';
import { MenuItem } from '@mui/material'

const logoFont = League_Spartan({
  weight: '800'
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "black" }} position="static">
        <Toolbar sx={{ marginTop: "10px" }}>
          <Typography
            variant="h2"
            noWrap
            component="div"
            color="#FFC700"
            className={logoFont.className}
          >
            UJL
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuItem>
              <Link href="" className={classes.link}>Institucional</Link>
            </MenuItem>
            <MenuItem>
              <Link href="" className={classes.link}>Blog</Link>
            </MenuItem>
            <MenuItem>
              <Link href="" className={classes.link}>Contribua</Link>
            </MenuItem>
            <MenuItem>
              <Link href="">
                <Button variant="contained" className={classes.root} sx={{ backgroundColor: "#FFC700", width: "90%", height: "100%", textAlign: "center", color: "black" }}>
                  <strong>
                    Junte-se
                  </strong>
                </Button>
              </Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
