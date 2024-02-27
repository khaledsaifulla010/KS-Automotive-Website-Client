

import Swal from 'sweetalert2'
const AddProduct = () => {
    const handleAddCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const model = form.model.value
        const image = form.image.value
        const price = form.price.value
        const rating = form.rating.value
        const descriptions = form.descriptions.value
        const supplier = form.supplier.value;

        const addProduct = { name, model, image, price, rating, descriptions, supplier };
        console.log(addProduct);

        //send data to the server

        fetch('https://2-ks-automotive-website-server.vercel.app/AddProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-6 mb-2">Add A Car</h2>
            <form onSubmit={handleAddCar}>

                <div className="ml-[380px]  bg-slate-400 w-[700px] p-4 h-[450px] rounded-xl mb-20 ">

                    <div className="flex items-center justify-center mt-[50px]">
                        <div >
                            <input type="text" placeholder="Enter Brand Name" className="input input-bordered w-full max-w-xs border-red-400 border-2 " name="name" />
                            <input type="text" placeholder="Enter Model Name" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4" name="model" />
                            <input type="text" placeholder="Enter Image URL" className="input input-bordered w-full max-w-xs border-red-400 border-2 mt-4" name="image" />
                            <input type="text" placeholder="Enter Price " className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-8" name="price" />
                        </div>
                        <div>
                            <input type="text" placeholder="Enter Rating" className="input input-bordered w-full max-w-xs border-red-400 border-2 " name="rating" />
                            <input type="text" placeholder="Enter Supplier" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4  " name="supplier" />
                            <input type="text" placeholder="Enter Descriptions" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4 mb-20" name="descriptions" />

                        </div>
                    </div>
                    <input type="submit" className="btn btn-wide mt-8 text-center ml-[220px]" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;