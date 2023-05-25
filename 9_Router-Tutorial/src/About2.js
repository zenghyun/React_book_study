import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About2 = () => {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개 페이지</h1>
            {showDetail && <p>detail값이 true로 설정되었습니다.</p> }
        </div>
    );
};

export default About2;