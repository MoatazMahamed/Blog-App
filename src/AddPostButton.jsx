import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AddPostButton() {
  const location = useLocation();

  return (
    <Link to={`/blog/new`}>
      <Button
        variant="contained"
        color="success"
        sx={{
          mt: 4,
          ...(location.pathname === "/blogs"
            ? {
                position: "relative",
                left: "50%",
                transform: "translate(-50%)",
              }
            : { mt: 6 }),
          fontSize: "20px",
          padding: "15px 35px",
          borderRadius: "12px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
          fontWeight: "bold",
          backgroundColor: "#8bc34a",
          transition: "all 0.3s",
          marginBottom: "60px",
          "&:hover": {
            backgroundColor: "#45a049",
          },
        }}
      >
        Add New Post
      </Button>
    </Link>
  );
}

export default AddPostButton;
