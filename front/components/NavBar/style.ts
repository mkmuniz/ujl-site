import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "#ECC219"
        }
    },
    link: {
        textColor: "#FFC700",
        "&:hover": {
            color: "#ECC219"
        }
    }
})