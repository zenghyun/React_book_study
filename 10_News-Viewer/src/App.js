import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/:category?" element={<NewsPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
