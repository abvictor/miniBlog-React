import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuthentication } from "../src/hooks/useAuthentication";

import { onAuthStateChanged } from "firebase/auth";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Search from "../src/pages/Search/Search";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import CreatePost from "../src/pages/CreatePost/CreatePost";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Post from "../src/pages/Post/Post";
import "./App.css";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />

              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
