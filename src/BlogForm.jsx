import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("تم اضافة المدونة");

    const newBlog = {
      title,
      content,
      isPublic,
    };

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    storedBlogs.push(newBlog);

    localStorage.setItem("blogs", JSON.stringify(storedBlogs));

    navigate("/blogs");
  };

  return (
    <Box
      onSubmit={handleSubmit}
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
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Content"
        fullWidth
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
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
        Save
      </Button>
    </Box>
  );
}

export default BlogForm;
