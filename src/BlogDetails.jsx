import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlog(storedBlogs[id]);
  }, [id]);

  if (!blog) return <h3>loading...</h3>;

  return (
    <div
      style={{
        color: "#212121",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
      }}
    >
      <Card sx={{ minWidth: "400px", maxWidth: "800px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          {blog.title}
        </Typography>

        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          {blog.content}
        </Typography>

        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          {blog.isPublic ? "عام" : "خاص"}
        </Typography>

        <Link to={`/blog/${id}/edit`}>
          <EditIcon
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "5px",
              borderRadius: "4px",
              margin: "10px",
              fontSize: "35px",
            }}
          />
        </Link>
      </Card>
    </div>
  );
}

export default BlogDetails;
