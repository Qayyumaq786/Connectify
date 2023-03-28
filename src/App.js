import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";
import YourPost from "./components/Home/YourPost";
import SavedPost from "./components/Home/SavedPost";
import LikedPost from "./components/Home/LikedPost";
import Reels from "./components/Home/Reels";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home name={userName} />} >
            <Route path="/home/" />
            <Route path="/home/SavedPost" element={<SavedPost/>}/>
            <Route path="/home/LikedPost" element={<LikedPost/>}/>
            <Route path="/home/YourPost" element={<YourPost/>}/>
            <Route path="/home/Reels" element={<Reels/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
