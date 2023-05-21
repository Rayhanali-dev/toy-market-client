import React, { useEffect, useState } from 'react';
import SingleCategory from '../singleCategory/SingleCategory';

const Category = () => {

    const [category, setCategory] = useState('sport car');
    const [categoryToys, setCategoryToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categoryToys/${category}`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }, [category])

    console.log(categoryToys);


    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-5xl text-center my-16'>Shop By Category</h3>
            <div className='text-center mx-auto'>
                <ul className='flex gap-6 items-center justify-center'>
                    <li><button className={`btn ${category == 'sport car' ? "btn-primary" : "btn-ghost"}`} onClick={() => setCategory('sport car')}>sport car</button></li>
                    <li><button className={`btn ${category == 'police car' ? "btn-primary" : "btn-ghost"}`} onClick={() => setCategory('police car')}>police car</button></li>
                    <li><button className={`btn ${category == 'Fire truck toy' ? "btn-primary" : "btn-ghost"}`} onClick={() => setCategory('Fire truck toy')}>Fire truck toy</button></li>
                </ul>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mt-11'>
                    {
                        categoryToys.map(toys => <SingleCategory key={toys._id} toys={toys}></SingleCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;