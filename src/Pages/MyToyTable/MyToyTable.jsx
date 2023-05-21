import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({ mytoy, setMyToys, myToys }) => {
    const { sellerName, name, toyCategory, price, quantity, photo, _id } = mytoy;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myToy/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                const remaining = myToys.filter(toys => toys._id !== _id)
                setMyToys(remaining);
            }
        })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <th>
                {sellerName}
            </th>
            <td>
                {name}
            </td>
            <td>
                {toyCategory}
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/update`}><button className="btn btn-primary btn-xs">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyTable;