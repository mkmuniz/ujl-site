import { makeStyles } from '@material-ui/styles';

export const footerStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "#ECC219"
        }
    },
    box: {
        borderBottom: "2px solid #FFC700",
        minWidth: "100vh",
        width: "100%"
    }
})