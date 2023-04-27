import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Home, ExerciseDetails, Footer } from "./utils";

const App = () => {
  return (
    <Box
      width={"400px"}
      className="App"
      sx={{ width: { xl: "1488px" } }}
      m={"auto"}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
