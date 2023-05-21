import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ toys }) => {
    const { photo, name, price, ratings, _id } = toys;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full h-[400px] object-cover' src={photo} alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='text-lg font-bold'>price: ${price}</p>
                    <p>Ratings: {ratings}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;