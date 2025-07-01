import "./App.css";
import Header from "./Header";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
import Home from "./Home";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import EditBlog from "./EditBlog";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", color: "white" }}>
      <ToastContainer position="top-center" autoClose={2000} />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/new" element={<BlogForm />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog/:id/edit" element={<EditBlog />} />
      </Routes>
    </div>
  );
}

export default App;
