import { Box, Grid, Typography } from '@mui/material';
import { Josefin_Slab, Righteous } from '@next/font/google';
import { headerStyles } from './style';

const josefinFont = Josefin_Slab({
    weight: '400',
});

const righteousFont = Righteous({
    weight: '400',
});

export default function Header() {
    const styles = headerStyles();

    return <>
        <Box className={styles.box}>
        <Grid container spacing={12} alignItems="center"
              justifyContent="center">
              <Grid item xs={5} md={4} style={{ marginLeft: "15%"}}>
                <Typography
                variant="h3"
                color="#FFC700" style={righteousFont.style}>
                    <strong>UNIÃO<br />JUVENTUDE E <br />
                    LIBERDADE</strong>
                </Typography>
                <Typography color="white" style={josefinFont.style}>
                    Faremos história!
                </Typography>
                <div style={{ borderBottom: '1px solid #FFC700', width: "50%", marginLeft: "15%", marginTop: "5px"}}></div>
              </Grid>
              <Grid item xs={4} md={6}>
                <img src="/header/logo-ujl.png" style={{width: "50%", marginTop: "15%", marginLeft: "15%"}}/>
              </Grid>
            </Grid>
        </Box>
    </>
}
