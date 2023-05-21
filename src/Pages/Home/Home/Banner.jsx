import React from 'react';
import banner from '../../../../src/assets/toy-banner.jpg'
const Banner = () => {
    return (
        <div className='h-[700px] relative'>
            <img className='h-full object-cover w-full bg-blend-overlay brightness-50' src={banner} alt="" />
            <div className='absolute transform -translate-y-1/2 top-1/2 left-8 lg:left-36'>
                <h3 className='text-white mb-6 font-bold text-3xl lg:text-6xl'>Pick the best toy <br /> for your kids</h3>
                <p className='font-medium text-white mb-6'>We Offer a premium service whether you are shopping <br /> at on of our flagship store or via our website</p>
                <button className='btn btn-primary'>Discover Now</button>
            </div>
        </div>
    );
};

export default Banner;