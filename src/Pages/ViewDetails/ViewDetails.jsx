import React from 'react';
import { useLoaderData } from 'react-router-dom';
import title from '../../Title/Title';

const ViewDetails = () => {
    title('Toy Zone || View Details')
    const toyDetails = useLoaderData()
    const { description, photo, name, sellerEmail, sellerName, ratings, quantity, price } = toyDetails
    return (
        <div className='bg-slate-600'>
            <div className="max-w-7xl mx-auto py-14">
                <div className="flex gap-6 items-center">
                    <img src={photo} className="max-w-sm rounded-lg w-full shadow-2xl" />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="text-lg font-medium">{description}</p>
                        <p className='text-lg font-medium'>Name: {sellerName}</p>
                        <p className='text-lg font-medium'>price: ${price}</p>
                        <p className='text-lg font-medium'>Email: {sellerEmail}</p>
                        <p className='text-lg font-medium'>Ratings: {ratings}</p>
                        <p className='text-lg font-medium'>Quantity: {quantity}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;