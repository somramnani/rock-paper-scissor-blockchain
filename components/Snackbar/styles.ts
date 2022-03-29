import { makeStyles } from "../../lib/utils/makeStyles";

const useStyles = makeStyles()((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme?.spacing(2),
    },
    marginLeft: -theme?.spacing(1),
    width: "100%",
  },
}));

export default useStyles;
