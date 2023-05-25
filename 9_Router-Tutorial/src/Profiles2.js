import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile2 from './Profile2';

const Profiles2 = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><NavLink to='/profiles/velopart'>velopart</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to='/profiles/gildong'>gildong</NavLink></li>
            </ul>
            <Routes>
                <Route path=':username' element={<Profile2 />}/>
            </Routes>
        </div>
    );
};

export default Profiles2;