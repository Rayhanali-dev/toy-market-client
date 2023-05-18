import React from 'react';
import Banner from './Banner';
import PopularStore from './PopularStore';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularStore></PopularStore>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;