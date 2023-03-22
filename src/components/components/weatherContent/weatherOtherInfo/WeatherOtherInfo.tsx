import React from 'react';
import './weatherOtherInfo.scss';

type Props = {
    windspeed: number | undefined;
    humidity: number | undefined;
}

const WeatherOtherInfo: React.FC<Props> = ({windspeed, humidity}) => {
    const humidityRound = humidity ? Math.round(humidity) : null

    return (
        <div className='weatherOtherInfo'>
            <div className="weatherOtherInfo_container">
                <div className="weatherOtherInfo_windImg iconSettings" />
                <p>{windspeed} m/s</p>
            </div>
            <div className="weatherOtherInfo_container">
                <div className="weatherOtherInfo_humidityImg iconSettings" />
                <p>{humidityRound} %</p>
            </div>
        </div>
    );
};

export default WeatherOtherInfo;