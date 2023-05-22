import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const MyToyTable = ({ mytoy, setMyToys, myToys }) => {
    const { sellerName, name, toyCategory, price, quantity, photo, _id } = mytoy;

    const handleDelete = (id) => {
        fetch(`https://toy-market-server-rayhanali-dev.vercel.app/myToy/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(toys => toys._id !== _id)
                        setMyToys(remaining);
                    }
                })
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
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-primary btn-xs">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyTable;