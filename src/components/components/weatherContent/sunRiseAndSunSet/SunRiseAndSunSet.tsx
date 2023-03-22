import React from 'react';
import './sunRiseAndSunSet.scss';

type Props = {
    sunRise: string | undefined,
    sunSet: string | undefined,
}

const SunRiseAndSunSet: React.FC<Props> = ({sunSet, sunRise}) => {
    return (
        <div className='sunRiseAndSunSet'>
            <div className="sunRiseAndSunSet_sunContainer">
                <div className="sunRiseAndSunSet_sunImage sunRise" />
                <p>
                    {sunRise}
                </p>
            </div>
            <div className="sunRiseAndSunSet_sunContainer">
                <div className="sunRiseAndSunSet_sunImage sunSet" />
                <p>
                    {sunSet}
                </p>
            </div>
        </div>
    );
};

export default SunRiseAndSunSet;