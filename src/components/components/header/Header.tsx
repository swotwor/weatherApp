import React, { useState } from 'react';
import './header.scss'

const Header: React.FC = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className='headerWrapper'>
            {time}
        </div>
    );
};

export default Header;