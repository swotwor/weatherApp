import React from 'react';
import './weatherAnimation.scss';

interface Props {
    icon: string | undefined,
    conditions: string | undefined,
}

const WeatherAnimation: React.FC<Props> = ({icon, conditions}) => {
    return (
        <div className='weatherAnimation'>
            <div className="weatherAnimation_icon" style={{backgroundImage: `url('/assets/${icon}.svg')`}}/>
            <p>{conditions}</p>
        </div>
    );
};

export default WeatherAnimation;