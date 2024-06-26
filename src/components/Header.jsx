import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "grey",
  },
});

const Header = (props) => {
  const { handleCart, orderLength } = props;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6" // Отображаемый размер
          component="h2" // Чем будет являться в DOM
          sx={{ flexGrow: 1 }}
        >
          MUI SHOP
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge badgeContent={orderLength} color="primary">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
