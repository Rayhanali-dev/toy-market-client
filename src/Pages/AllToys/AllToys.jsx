import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyTable from '../AllToyTable/AllToyTable';
import title from '../../Title/Title';

const AllToys = () => {
    title('Toy Zone || All Toys')
    const toys = useLoaderData();
    const [alltoys, setAllToys] = useState(toys)
    const [search, setSearch] = useState('');

    const handleSearchBtn = () => {
        fetch(`http://localhost:5000/toys/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
    }

    return (
        <div className="overflow-x-auto w-full max-w-7xl py-8 mx-auto">
            <div className='text-center mt-8'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='p-1 border' />
                <button className='btn btn-secondary' onClick={handleSearchBtn}>Search</button>
            </div>
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