import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import title from '../../Title/Title';

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
        const price = form.price.value;
        const quantity = form.quantity.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        const photo = form.photourl.value;
        console.log(name, sellerName, sellerEmail, toyCategory, price, quantity, ratings, description);
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
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photourl' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
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
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" name='ratings' placeholder="Ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Description" className="input input-bordered" />
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