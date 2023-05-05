import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
          <li>
            <Link to="/history">History 예제</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        {["/about", "/info"].map((path) => (
          <Route path={path} key={path} element={<About />} />
        ))}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history/*" element={<HistorySample />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
            </div>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
