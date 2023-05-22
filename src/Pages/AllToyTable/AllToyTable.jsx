import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTable = ({ toy }) => {
    const { sellerName, name, toyCategory, price, quantity, _id } = toy;
    return (
        <tr>
            <th>
                {sellerName}
            </th>
            <td>
                {name}
            </td>
            <td>
                {toyCategory}
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default AllToyTable;