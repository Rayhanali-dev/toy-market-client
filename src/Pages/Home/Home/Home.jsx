import React from 'react';
import Banner from './Banner';
import PopularStore from './PopularStore';
import Gallery from './Gallery';
import Category from '../../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularStore></PopularStore>
            <Category></Category>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;