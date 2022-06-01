import React from 'react';
import Recipes from '../Recipes/Recipes';
import Banner from './Banner/Banner';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recipes></Recipes>
        </div>
    );
};

export default Home;