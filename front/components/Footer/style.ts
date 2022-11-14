import { makeStyles } from '@material-ui/styles';

export const footerStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "#ECC219"
        }
    },
    box: {
        minWidth: "100vh",
        borderBottom: "2px solid #FFC700",
        width: "100%",
        padding: "0px",
    }
})