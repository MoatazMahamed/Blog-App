import { List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddPostButton from "./AddPostButton";
import { Link, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PuplicIcon from "@mui/icons-material/Public";
import PuplicOffIcon from "@mui/icons-material/PublicOff";
import { toast } from "react-toastify";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const location = useLocation();

  const handleToggleComplete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].isPublic = !updatedBlogs[index].isPublic;
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);

    if (updatedBlogs[index].isPublic) {
      toast.success("حالة المدونة (عام)");
    } else {
      toast.success("حالة المدونة (خاص)");
    }
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => {
      return i !== index;
    });
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    toast.success("تم الحذف بنجاح");
  };

  return (
    <>
      {location.pathname !== "/" && (
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            marginTop: "50px",
            textAlign: "center",
            color: "#212121",
            fontSize: "40px",
          }}
        >
          Blog List
        </Typography>
      )}

      <AddPostButton />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <List sx={{ color: "white", fontSize: "10px", width: "37%" }}>
          {blogs.map((blog, index) => (
            <ListItem
              key={index}
              sx={{
                background: "#8bc34a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                mb: 3,
                boxShadow: 6,
              }}
            >
              <Typography component="span">
                {blog.title}
                <br />
                {blog.content} -{" "}
                {blog.isPublic ? (
                  <PuplicIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                      position: "relative",
                      top: "3px",
                    }}
                  />
                ) : (
                  <PuplicOffIcon
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      position: "relative",
                      top: "3px",
                    }}
                  />
                )}
              </Typography>

              <div>
                <Link to={`/blog/${index}`}>
                  <EditIcon
                    style={{
                      background: "#2196F3",
                      color: "white",
                      padding: "5px",
                      margin: "20px 10px 10px 10px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>

                <Link>
                  <DeleteForeverIcon
                    onClick={() => {
                      handleDelete(index);
                    }}
                    style={{
                      margin: "20px 10px 10px 10px",
                      background: "#F44336",
                      color: "white",
                      padding: "5px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>

                <Link>
                  {blog.isPublic ? (
                    <PuplicOffIcon
                      onClick={() => {
                        handleToggleComplete(index);
                      }}
                      style={{
                        margin: "20px 10px 10px 10px",
                        background: "#28A745",
                        color: "white",
                        padding: "5px",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <PuplicIcon
                      onClick={() => {
                        handleToggleComplete(index);
                      }}
                      style={{
                        margin: "20px 10px 10px 10px",
                        background: "#20C997",
                        color: "white",
                        padding: "5px",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </Link>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default BlogList;
