import React from 'react';
import sponser1 from '../../assets/cl2-copyright.webp';
import sponser2 from '../../assets/cl3-copyright.webp';
import sponser3 from '../../assets/cl4-copyright.webp';
import sponser4 from '../../assets/cl5-copyright.webp';

const Sponser = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='lg:text-5xl text-2xl text-center my-16'>We work with the best brands</h3>
            <div className='grid mb-16 grid-cols-2 lg:grid-cols-4'>
                <div className='mx-auto'>
                    <img src={sponser1} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={sponser2} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={sponser3} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={sponser4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sponser;