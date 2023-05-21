import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToyTable from '../MyToyTable/MyToyTable';
import title from '../../Title/Title';

const MyToys = () => {
    title('Toy Zone || My Toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [priceSort, setPriceSort] = useState('ascending');

    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}&&priceSort=${priceSort}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user, priceSort])



    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-4xl text-center my-10'>My Toy: {myToys.length}</h3>
            <div className='my-10 flex gap-6'>
                <button onClick={() => setPriceSort('ascending')} className='btn btn-primary'>Ascending</button>
                <button onClick={() => setPriceSort('descending')} className='btn btn-primary'>Descending</button>
            </div>
            <div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(mytoy => <MyToyTable myToys={myToys} setMyToys={setMyToys} key={mytoy._id} mytoy={mytoy}></MyToyTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;