import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
    <Routes>
      <Route element={<PostListPage />} path='/@:username' exact />
      <Route element={<PostListPage />} path='/' exact />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<WritePage />} path="/write" />
      <Route element={<PostPage />} path="/@:username/:postId" />
   </Routes>
    </>
   
  );
}

export default App;
