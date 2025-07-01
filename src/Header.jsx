import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./App.css";
import "@fontsource/roboto";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ background: "#8bc34a" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "bold",
            fontSize: "35px",
          }}
        >
          My Blog
        </Typography>

        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{
            fontFamily: "'Poppins' , sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "lightgreen",
              color: "black",
            },
          }}
        >
          HOME
        </Button>

        <Button
          component={Link}
          to="/login"
          color="inherit"
          sx={{
            fontFamily: "'Poppins' , sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "lightgreen",
              color: "black",
            },
          }}
        >
          LOGIN
        </Button>

        <Button
          component={Link}
          to="/register"
          color="inherit"
          sx={{
            fontFamily: "'Poppins' , sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "lightgreen",
              color: "black",
            },
          }}
        >
          REGISTER
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
