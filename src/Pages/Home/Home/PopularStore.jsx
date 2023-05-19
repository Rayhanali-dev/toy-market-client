import React from 'react';
import popular1 from '../../../../src/assets/toy1.jpg';
import popular2 from '../../../../src/assets/toy2.jpg';
import popular3 from '../../../../src/assets/toy3.jpg';
import popular4 from '../../../../src/assets/toy4.jpg';

const PopularStore = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h3 className='text-5xl text-center my-16'>Popular in Store</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 py-10">
                            <img src={popular1} alt="Shoes" className="rounded-xl" />
                        </figure>

                    </div>
                    <h3 className='text-center text-2xl my-6 font-bold text-cyan-700'>Dolls Trailer</h3>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 py-10">
                            <img src={popular2} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <h3 className='text-center text-2xl my-6 font-bold text-cyan-700'>Construction Cup</h3>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 py-10">
                            <img src={popular3} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <h3 className='text-center text-2xl my-6 font-bold text-cyan-700'>Teddy Bear Toy</h3>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 py-10">
                            <img src={popular4} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <h3 className='text-center text-2xl my-6 font-bold text-cyan-700'>Emergency Truck</h3>
                </div>
            </div>
        </div>
    );
};

export default PopularStore;