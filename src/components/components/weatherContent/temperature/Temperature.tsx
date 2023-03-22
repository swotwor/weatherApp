import React from 'react';
import './temperature.scss';

type Props = {
    temp: number | undefined;
}

const Temperature: React.FC<Props> = ({temp}) => {    
    return (
        <div className='temperature'>
            <div className="temperature_thermometerIcon iconSize" />
            <p className='temperature_text'>
                {temp ? Math.round((temp - 32) / 1.8) : null}
            </p>
            <div className="temperature_tempIcon iconSize" />
        </div>
    );
};

export default Temperature;