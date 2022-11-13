import { Box, Container, Typography, Button, Grid, List, ListItem } from "@mui/material";
import { League_Spartan, Josefin_Slab } from "@next/font/google";
import { footerStyles } from "./style";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from 'next/link'


const titleFont = League_Spartan({
    weight: '700',
});

const josefinFont = Josefin_Slab({
    weight: '400',
});


export default function Footer() {
    const styles = footerStyles();
    return <>
        <Box>
            <Box className={styles.box}>
                <Container sx={{ marginBottom: 5 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant="h3" color="#FFC700" style={titleFont.style}>JUVENTUDE &</Typography>
                            <Typography variant="h3" color="white" style={titleFont.style}>
                                ATIVISMO &
                                <br />
                            </Typography>
                            <Typography variant="h3" color="#FFC700" style={titleFont.style}>
                                LIBERDADE &
                            </Typography>
                            <Typography variant="h3" color="white" style={titleFont.style}>
                                CERVEJA &
                            </Typography>
                            <Typography variant="h3" color="#FFC700" style={titleFont.style}>VEM PARA A UJL.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Container sx={{ width: "60%", height: "50%", paddingTop: "15%" }}>
                                <Link href="">
                                    <Button variant="contained" className={styles.root} sx={{ backgroundColor: "#FFC700", width: "90%", fontSize: 30, height: "100%", textAlign: "center", color: "black" }}>
                                        <strong>
                                            Junte-se
                                        </strong>
                                    </Button>
                                </Link>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={5}>
                        <img src="/navbar/Union.png" style={{ width: "30%", marginTop: "10%" }} />
                        <Typography color="white" style={josefinFont.style}>
                            Faremos história!
                        </ Typography>
                        <div style={{ borderBottom: '1px solid #FFC700', width: "70%", marginTop: "2%", marginBottom: "2%" }}></div>
                        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container spacing={4}>
                                    <Grid item>
                                        <Link href="" style={{ color: "white", fontSize: "35px" }}><FaFacebook /></Link></Grid>
                                    <Grid item>
                                        <Link href="" style={{ color: "white", fontSize: "35px" }}><FaTwitter /></Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="" style={{ color: "white", fontSize: "35px" }}><FaInstagram /></Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="" style={{ color: "white", fontSize: "35px" }}><FaTiktok/></Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="" style={{ color: "white", fontSize: "35px" }}><FaYoutube/></Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ borderLeft: '1px solid #FFC700', marginTop: "5%", marginBottom: "2%" }}></div>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                                <List>
                                    <ListItem>
                                        <Typography color="white" sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                            <strong>INSTITUCIONAL</strong>
                                        </Typography>
                                    </ListItem>
                                    <Typography style={josefinFont.style}>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Quem somos</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Valores</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Lideranças</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Bancadas</Link>
                                        </ListItem>
                                    </Typography>
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <List>
                                    <ListItem>
                                        <Typography color="white" sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                            <strong>+UJL</strong>
                                        </Typography>
                                    </ListItem>
                                    <Typography style={josefinFont.style}>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Blog</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Podcast</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="" style={{ color: "white" }}>Newsletter</Link>
                                        </ListItem>
                                    </Typography>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}