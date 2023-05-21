import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyTable from '../AllToyTable/AllToyTable';
import title from '../../Title/Title';

const AllToys = () => {
    title('Toy Zone || All Toys')
    const alltoys = useLoaderData();
    return (
        <div className="overflow-x-auto w-full max-w-7xl py-8 mx-auto">
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