import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function ProductsPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ product: '', price: '' });
    const [editFormData, setEditFormData] = useState({ id: '', product: '', price: '' });
    const [products, setProducts] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    //asynchronous function to handle adding product input changes
    const handleInputChange = (e) => {
        //this function will update the formData state
        //when the user types in the input field
        //e is the event object
        //e.target is the input field
        //e.target.name is the name of the input field
        //e.target.value is the value of the input field
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //asynchronous function to handle editing product input changes
    const handleEditInputChange = (e) => {
        //this function will update the editFormData state
        //when the user types in the input field
        //e is the event object
        //e.target is the input field
        //e.target.name is the name of the input field
        //e.target.value is the value of the input field
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value
        });
    };

    //asynchronous function to handle adding a new product
    const handleAddProduct = async (e) => {
        //this function will add a new product to the database
        //e is the event object
        //e.preventDefault();
        try {
            //set loading to true
            setLoading(true);
            //make an API request to add a new product
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            //clear the form data
            setFormData({
                product: '',
                price: ''
            });
            //set loading to false
            setLoading(false);
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    //asynchronous function to fetch all products
    const fetchProducts = async () => {
        //this function will fetch all products from the database
        try {
            //make an API request to fetch all products
            const response = await fetch('/api/products');
            //if the response is not ok, throw an error
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            //convert the response to JSON
            const data = await response.json();
            //set the products state
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    //fetch products when the component mounts
    useEffect(() => {
        //fetch products when the component mounts
        fetchProducts();
    }, []);

    //asynchronous function to handle deleting a product
    const handleDeleteProduct = async (id) => {
        //this function will delete a product from the database
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            //fetch products after deletion
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    //asynchronous function to handle updating a product
    const handleUpdateProduct = async () => {
        //this function will update a product in the database
        try {
            //set loading to true
            setLoading(true);
            //make an API request to update a product
            const response = await fetch(`/api/products/${editFormData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editFormData)
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            //clear the edit form data
            setEditFormData({
                id: '',
                product: '',
                price: ''
            });
            //set loading to false
            setLoading(false);
            //close the edit modal
            setIsEditModalOpen(false);
            //fetch products after update
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
    return (
        <AuthenticatedLayout 
            header={
                    <h2 className="text-xl font-semibold leading-tight bg-slate-100 h- full w- full text-gray-800 dark:text-gray-200">
                     Products
                    </h2>
                
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 h- full w- full bg-gradient-to-tl from-blue-500 to-green-500">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-yellow-200 ring-red-500 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            JIANE IPHONE SHOP!
                        </div>
                    </div>
                    <div className="overflow-hidden mt-5 bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 flex">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <input
                                type="text"
                                name="product"
                                placeholder="Enter Iphone brand"
                                value={formData.product} //set value to form data product
                                onChange={handleInputChange} //handle input change
                                className="border rounded px-3 py-2 w-full"
                            />

                            <input
                                type="number"
                                name="price"
                                placeholder="Enter Iphone price"
                                value={formData.price} //set value to form data product
                                onChange={handleInputChange} //handle input change
                                className="border rounded px-3 py-2 w-full mt-2"
                            />

                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                                onClick={handleAddProduct} //handle add product
                            >
                                Add Product
                            </button>
                        </div>

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-200 px-4 py-2">Product</th>
                                        <th className="border border-gray-200 px-4 py-2">Price</th>
                                        <th className="border border-gray-200 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* map through products and display them in the table */}
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="border border-gray-200 px-4 py-2">{product.product}</td>
                                            <td className="border border-gray-200 px-4 py-2">${product.price}</td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                {/* edit button set edit form data and open edit modal */}
                                                <button className="bg-blue-500 text-white px-2 py-1 rounded me-2" onClick={() => { setEditFormData({ id: product.id, product: product.product, price: product.price }); setIsEditModalOpen(true); }}>
                                                    Edit
                                                </button>
                                                {/* delete button delete product from database */}
                                                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteProduct(product.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-800 text-white py-4 mt-8">
                <footer className="bg-gray-800 text-white py-4 mt-8">
                    <div className="container mx-auto text-center">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved. UNTA DILI KO MA BAGSAK!
                    </div>
                </footer>
            </div>

            <Modal
                show={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            >
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <h2 className="text-lg font-bold mb-4">Edit Product</h2>
                    <input
                        type="text"
                        name="product"
                        placeholder="Enter product name"
                        value={editFormData.product}
                        onChange={handleEditInputChange}
                        className="border rounded px-3 py-2 w-full mb-4 text-gray-900"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        value={editFormData.price}
                        onChange={handleEditInputChange}
                        className="border rounded px-3 py-2 w-full mb-4 text-gray-900"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleUpdateProduct}
                    >
                        Update Product
                    </button>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}
