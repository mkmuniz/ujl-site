import { Container, Box, Grid, Typography } from "@mui/material";
import { League_Spartan } from '@next/font/google'

const titleFont = League_Spartan({
    weight: '700'
});
export default function About() {
    return <>
        <Box>
            <Container>
                <Typography variant="h4" style={{ color: "#FFC700" }} textAlign="center" className={titleFont.className}>
                    QUEM SOMOS?
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography color="white">
                            Teste
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography color="white" mt={2}>
                            A UJL, União, Juventude e Liberdade, é uma união de jovens dispostos a discutir os problemas enfrentados por estudantes secundaristas e universitários brasileiros, pautando sempre a defesa das liberdades individuais.
                        </Typography>

                        <Typography color="white" mt={2}>
                            Surgida de dentro da ONG Students For	 Liberty Brazil, em 4 de julho de 2020, a UJL foi criada para participar do LibertyLab e acabou se tornando a vencedora do Hackaton Liberal no começo de 2021. Posteriormente, fomos agraciados com os três prêmios que compõem o SFLB Awards e disputamos o prêmio internacional de grupo do ano pelo SFL Inc.
                        </Typography>

                        <Typography color="white" mt={2}>
                            Em um ano, sem qualquer tipo de orçamento, a UJL veio a se tornar o maior grupo estudantil liberal do Brasil, contando agora com quase três mil membros e mais de 200 lideranças ativas em todos os estados da federação e no Distrito Federal. Ao longo de dois anos, foram mais de 20 mil reais arrecadados para diversos projetos sociais, além de parcerias fechadas com diversas instituições em mais de 5 países diferentes.
                        </Typography>

                        <Typography color="white" mt={2}>
                            Estamos apenas começando, se você quer ser um agente de mudança e defender a liberdade na sua universidade, vem conosco fazer história
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}