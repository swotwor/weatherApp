import React, { FormEventHandler, useState } from 'react';
import { fetchWeather } from '../../../../helpers/logic';
import { IWeather } from '../../../../types/weather';
import './searchInput.scss';

interface SearchInputProps {
    setDataWeather: (weather: IWeather) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ setDataWeather }) => {
    const [location, setLocation] = useState('');

    const handleFetch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (location) fetchWeather(location, setDataWeather);
    };

    return (
        <form onSubmit={handleFetch} className="searchInputWrapper">
            <input
                name="location"
                type="text"
                placeholder="Type your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit" />
        </form>
    );
};

export default SearchInput;
