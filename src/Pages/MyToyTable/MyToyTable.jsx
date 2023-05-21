import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({ mytoy }) => {
    const { sellerName, name, toyCategory, price, quantity, photo } = mytoy;
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
                <button className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyTable;