import { Container, Typography } from "@mui/material";
import "@fontsource/lobster/400.css";
import BlogList from "./BlogList";

function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: "30px", color: "#0d8549" }}>
      <Typography variant="h4" sx={{ fontFamily: "'Lobster' , cursive" }}>
        Welcome To My Blog
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "'Lobster' , cursive" }}>
        This is the home page of the blog.
      </Typography>

      <BlogList />
    </Container>
  );
}

export default Home;
