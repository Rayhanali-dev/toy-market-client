import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import gallery1 from '../../../assets/gallery1.jpg';
import gallery2 from '../../../assets/gallery2.jpg';
import gallery3 from '../../../assets/gallery3.jpeg';
import gallery4 from '../../../assets/gallery4.jpg';
import gallery5 from '../../../assets/gallery5.jpg';
import gallery6 from '../../../assets/gallery6.jpg';
import gallery7 from '../../../assets/gallery7.jpeg';
import gallery8 from '../../../assets/gallery8.jpeg';
const Gallery = () => {
    return (
        <div className='max-w-7xl overflow-hidden mx-auto mb-10'>
            <h3 className='lg:text-5xl text-2xl text-center my-16'>Gallery</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <div data-aos="fade-right">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery1} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery2} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="flip-left">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery3} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="flip-right">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery4} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="flip-up">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery5} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="flip-down">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery6} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery7} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery8} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;