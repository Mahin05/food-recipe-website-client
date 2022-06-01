import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://walnuts.org/wp-content/uploads/2018/12/Thai-Walnut-BBQ-Chicken-Bowl-1400x680.jpg" className="max-w-sm rounded-lg shadow-2xl mobile-banner" />
                <div>
                    <h1 className="text-5xl font-bold mobile-title">GET YOUR RECIPES HERE!!</h1>
                    <p className="py-6">An all around lovely and clean-cut website for all of your recipe desires. Find collections based on meals, in addition to snack beverages and more...</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;