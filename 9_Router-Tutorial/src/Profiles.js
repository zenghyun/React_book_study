import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    const style = {
        background:'black',
        color:'white'
    };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink style={style} to="/profiles/velopart">velopart</NavLink>
        </li>
        <li>
          <NavLink style={style} to="/profiles/gildong">gildong</NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/profiles/*"
          element={() => <div>사용자를 선택해 주세요.</div>}
        />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
