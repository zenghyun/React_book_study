import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home2 from './Home2';
import About2 from './About2';
import Profiles2 from './Profiles2';
import HistorySample2 from './HistorySample2';

const App2 = () => {
    return (
        <>
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
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home2 />}></Route>
                {['/about', '//info'].map(path => (
                <Route path={path} key={path} element={<About2 />} />
                ))}
                <Route path='/profiles/*' element={<Profiles2 />}/>
                <Route path='/history/*' element={<HistorySample2 />}/>
            </Routes>
        </>
    );
};

export default App2;