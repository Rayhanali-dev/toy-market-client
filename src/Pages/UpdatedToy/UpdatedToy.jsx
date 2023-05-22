import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdatedToy = () => {
    const update = useLoaderData();
    const {_id} = update;
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const updatedData = {
            quantity,
            price,
            description
        };
        fetch(`http://localhost:5000/updatedToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                Swal.fire(
                    'Updated',
                    'Updated Successfully',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="min-h-screen bg-base-200 max-w-7xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatedToy;