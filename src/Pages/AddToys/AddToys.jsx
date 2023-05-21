import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import title from '../../Title/Title';
import Swal from 'sweetalert2'

const AddToys = () => {
    title('Toy Zone || Add Toys')
    const {user} = useContext(AuthContext);
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;
        const toyCategory = form.toyCategory.value;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        const photo = form.photourl.value;
        form.reset();
        const addToys = {
            name, 
            sellerName, 
            sellerEmail, 
            toyCategory, 
            price, 
            quantity, 
            ratings, 
            description,
            photo
        }
        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire(
                    'Added!',
                    'Toy Added Successfully',
                    'success'
                )
            }
        })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddToy} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" readOnly defaultValue={user?.displayName} name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" required name='photourl' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" readOnly name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <select name="toyCategory" className='input input-bordered'  id="">
                                    <option value="sport car">sport car</option>
                                    <option value="police car">police car</option>
                                    <option value="Fire truck toy">Fire truck toy</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" required name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" required name='ratings' placeholder="Ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" required name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <input type="text" required name='description' placeholder="Description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Toys</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;