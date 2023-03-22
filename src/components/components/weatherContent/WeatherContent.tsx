import React, { useState } from 'react';
import { IWeather } from '../../../types/weather';
import './weatherContent.scss';
import SearchInput from './searchInput/SearchInput';
import WeatherAnimation from './weatherAnimation/WeatherAnimation';
import Temperature from './temperature/Temperature';
import SunRiseAndSunSet from './sunRiseAndSunSet/SunRiseAndSunSet';
import WeatherOtherInfo from './weatherOtherInfo/WeatherOtherInfo';

const WeatherContent: React.FC = () => {
    const [dataWeather, setDataWeather] = useState<IWeather>();

    return (
        <div className="weatherContentWrapper">
            <SearchInput setDataWeather={setDataWeather} />
            {dataWeather && (
                <>
                    <WeatherAnimation
                        icon={dataWeather?.icon}
                        conditions={dataWeather?.conditions}
                    />
                    <Temperature temp={dataWeather?.temp} />
                    <SunRiseAndSunSet
                        sunSet={dataWeather?.sunset}
                        sunRise={dataWeather?.sunrise}
                    />
                    <WeatherOtherInfo
                        humidity={dataWeather?.humidity}
                        windspeed={dataWeather?.windspeed}
                    />
                </>
            )}
        </div>
    );
};

export default WeatherContent;
