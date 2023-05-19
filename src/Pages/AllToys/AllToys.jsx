import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyTable from '../AllToyTable/AllToyTable';

const AllToys = () => {
    const alltoys = useLoaderData();
    return (
        <div className="overflow-x-auto w-full max-w-7xl mx-auto">
            <h3>TOY LENGTH: {alltoys.length}</h3>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltoys.map(toy => <AllToyTable key={toy._id} toy={toy}></AllToyTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;