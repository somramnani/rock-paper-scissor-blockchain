import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import Button from "@mui/material/Button";

const Navbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RPS
          </Typography>

          <Button color="inherit">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Button>

          <Button color="inherit">
            <Link href="">
              <a>Play</a>
            </Link>
          </Button>

          <Button color="inherit">
            <Link href="/about">
              <a>About</a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
