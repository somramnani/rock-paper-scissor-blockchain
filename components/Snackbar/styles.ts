import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    marginLeft: -theme.spacing(1),
    width: "100%",
  },
}));

export default useStyles;
