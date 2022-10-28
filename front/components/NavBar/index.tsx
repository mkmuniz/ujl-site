import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useStyles } from './style';

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "black" }} position="static">
        <Toolbar sx={{ marginTop: "10px" }}>
          <Typography
            variant="h3"
            noWrap
            component="div"
            color="#FFC700"
          >
            <strong>UJL</strong>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Grid container spacing={9} alignItems="center"
              justifyContent="center">
              <Grid item xs={2} md={3}>
                <Link href="" className={classes.link}>Institucional</Link>
              </Grid>
              <Grid item xs={2} md={2}>
                <Link href="" className={classes.link}>Blog</Link>
              </Grid>
              <Grid item xs={2} md={3}>
                <Link href="" className={classes.link}>Contribua</Link>
              </Grid>
              <Grid item xs={2} md={4}>
                <Link href="">
                  <Button variant="contained" className={classes.root} sx={{ backgroundColor: "#FFC700", width: "90%", height: "100%", textAlign: "center", color: "black" }}>
                    <strong>
                      Junte-se
                    </strong>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
