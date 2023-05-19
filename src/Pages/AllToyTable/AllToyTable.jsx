import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTable = ({ toy }) => {
    console.log(toy);
    const { sellerName, name, toyCategory, price, quantity, } = toy;
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
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/viewDetails`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default AllToyTable;