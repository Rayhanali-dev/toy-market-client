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
        fetch(`https://toy-market-server-rayhanali-dev.vercel.app/toys/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
    }

    return (
        <div className="overflow-x-auto w-full max-w-7xl py-8 mx-auto">
            <div className='flex items-center gap-6 mb-6 justify-center mt-8'>
                <input onChange={(e) => setSearch(e.target.value)} placeholder='search by toy name' type="text" className='px-2 py-2 border w-1/2' />
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