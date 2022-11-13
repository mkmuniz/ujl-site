import { Box, Container, Typography, Button } from "@mui/material";
import { League_Spartan } from "@next/font/google";
import { footerStyles } from "./style";
import Link from 'next/link'


const titleFont = League_Spartan({
    weight: '700',
});

export default function Footer() {
    const styles = footerStyles();
    return <>
        <Box>
            <Box className={styles.box}>
                <Container>
                    <Typography variant="h4" color="#FFC700" style={titleFont.style}>JUVENTUDE &</Typography>
                    <Typography variant="h4" color="white" style={titleFont.style}>
                        ATIVISMO &
                        <br />
                    </Typography>
                    <Typography variant="h4" color="#FFC700" style={titleFont.style}>
                        LIBERDADE &
                    </Typography>
                    <Typography variant="h4" color="white" style={titleFont.style}>
                        CERVEJA &
                    </Typography>
                    <Typography variant="h4" color="#FFC700" style={titleFont.style}>VEM PARA A UJL.
                    </Typography>
                    <Link href="">
                        <Button variant="contained" className={styles.root} sx={{ backgroundColor: "#FFC700", width: "90%", height: "100%", textAlign: "center", color: "black" }}>
                            <strong>
                                Junte-se
                            </strong>
                        </Button>
                    </Link>
                </Container>
            </Box>
            <img src="/navbar/Union.png" />
        </Box>
    </>
}