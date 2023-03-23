import React from 'react';
import WeatherContent from './components/weatherContent/WeatherContent';
import './mainComponents.scss';

const MainComponent: React.FC = () => {
    return (
        <div className="wrapperMainComponent">
            <WeatherContent />
        </div>
    );
};

export default MainComponent;
