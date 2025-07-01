import { TextField, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blog = storedBlogs[id];
    setTitle(blog.title);
    setContent(blog.content);
    setIsPublic(blog.isPublic);
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedBlogs[id] = { title, content, isPublic };
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));
    window.location.href = `/blogs`;
  };

  return (
    <Box
      onSubmit={handleUpdate}
      component="form"
      sx={{
        mt: 3,
        width: "30%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <TextField
        label="title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Content"
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "100px",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          top: "100%",
        }}
      >
        Update
      </Button>
    </Box>
  );
}

export default EditBlog;
