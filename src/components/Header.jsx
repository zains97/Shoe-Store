import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import NotFound from "./NotFound";
import ProductDetails from "./ProductDetails";
import ProductHome from "./ProductHome";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.root}>
          <Button
            onClick={() => {
              navigate("/");
            }}
            color="inherit"
          >
            <Typography variant="h6" color="inherit">
              Shoe Store
            </Typography>
          </Button>

          <div>
            <Button
              onClick={() => {
                navigate("/");
              }}
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/products");
              }}
              color="inherit"
            >
              Products
            </Button>{" "}
            <Button
              onClick={() => {
                navigate("/about");
              }}
              color="inherit"
            >
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductHome />} />
          <Route path=":productID" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Header;
