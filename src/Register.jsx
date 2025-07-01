import { TextField, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    toast.success("تم انشاء الحساب");
  };

  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          mt: 3,
          width: "350px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50% , -50%)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#212121", mb: 4, textAlign: "center" }}
        >
          Register
        </Typography>

        <TextField
          label="Email"
          fullWidth
          autoComplete="off"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ mb: 4 }}
        />

        <TextField
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            fontSize: "16px",
            padding: "10px 15px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
            mt: 4,
            fontWeight: "bold",
            backgroundColor: "#8bc34a",
            transition: "all 0.3s",
            position: "relative",
            left: "50%",
            transform: "translate(-50%)",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </div>
  );
}

export default Register;
