import React from 'react';
import './weatherAnimation.scss';
import { removeDash } from './logic/logic';

interface Props {
    icon: string | undefined;
    conditions: string | undefined;
}

const WeatherAnimation: React.FC<Props> = ({ icon, conditions }) => {
    return (
        <div className="weatherAnimation">
            <div className="weatherAnimation_icon" style={{backgroundImage: `url(${removeDash(icon)})`}}/>
            <p>{conditions}</p>
        </div>
    );
};

export default WeatherAnimation;
