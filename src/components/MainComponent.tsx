import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import WeatherContent from './components/weatherContent/WeatherContent';
import './mainComponents.scss'

const MainComponent: React.FC = () => {
    return (
        <div className='wrapperMainComponent'>
            <div className="wrapperMainComponent_inner">
                <Header />
                <WeatherContent/>
                <Footer />
            </div>
        </div>
    );
};

export default MainComponent;