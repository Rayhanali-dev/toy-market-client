import React from 'react';
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
        <div className='max-w-7xl mx-auto mb-10'>
            <h3 className='text-5xl text-center my-16'>Gallery</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery1} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery2} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery3} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery4} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery5} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery6} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 h-80 py-10">
                            <img src={gallery7} alt="Shoes" className="rounded-xl object-cover" />
                        </figure>
                    </div>
                </div>
                <div>
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