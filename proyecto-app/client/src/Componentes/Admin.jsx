import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stilos/CRUD.css'; // Importa el archivo CSS para estilos personalizados

const ProductCRUD = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [form, setForm] = useState({ PrecioAnt: '', PrecioPromo: '', imgProducto: null });
    const [imageURLs, setImageURLs] = useState({});
    const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        // Cleanup: Revoke the Object URL when the component unmounts or form.imgProducto changes
        return () => {
            Object.values(imageURLs).forEach((url) => URL.revokeObjectURL(url));
        };
    }, [imageURLs]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
            // Set image URLs
            const urls = {};
            for (const product of response.data) {
                const imageUrl = await getImageUrl(product.ID);
                if (imageUrl) {
                    urls[product.ID] = imageUrl;
                }
            }
            setImageURLs(urls);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getImageUrl = async (ID) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${ID}/image`, { responseType: 'arraybuffer' });
            const imageBuffer = response.data;
            const imageUrl = `http://localhost:5000/api/products/${ID}/image`; // URL que apunta a la imagen en el servidor
            return imageUrl;
        } catch (error) {
            console.error('Error fetching image:', error);
            return null;
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, imgProducto: file });
            // Create a URL for the preview
            setImageURLs((prev) => ({ ...prev, preview: URL.createObjectURL(file) }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            Object.keys(form).forEach((key) => {
                if (form[key] !== null) {
                    formData.append(key, form[key]);
                }
            });

            if (selectedProduct) {
                await axios.put(`http://localhost:5000/api/products/${selectedProduct.ID}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await axios.post('http://localhost:5000/api/products', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            fetchProducts(); // Refresh product list and images
            handleResetForm();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setForm({ PrecioAnt: product.PrecioAnt, PrecioPromo: product.PrecioPromo, imgProducto: null });
        setShowForm(true); // Mostrar el formulario
        window.scrollTo(0, document.body.scrollHeight); // Scroll to the form
    };

    const handleDelete = async (ID) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${ID}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleResetForm = () => {
        setSelectedProduct(null);
        setForm({ PrecioAnt: '', PrecioPromo: '', imgProducto: null });
        // Revoke the preview URL
        if (form.imgProducto) {
            URL.revokeObjectURL(imageURLs.preview);
        }
        setImageURLs((prev) => ({ ...prev, preview: null }));
        setShowForm(false); // Ocultar el formulario
    };

    return (
        <div>
            <div className=" d-flex justify-content-end">
                <Link to="/">
                    <button className="btn btn-logout" id='logOut'>
                        Cerrar Sesión
                    </button>
                </Link>
            </div><br></br>
            <Button variant="primary" onClick={() => {
                handleResetForm();
                setShowForm(true); // Mostrar el formulario
                window.scrollTo(0, document.body.scrollHeight); // Scroll to the form
            }}>
                Add Product
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Precio Antiguo</th>
                        <th>Precio Promoción</th>
                        <th>Imagen</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.ID}>
                            <td>{product.ID}</td>
                            <td>{product.PrecioAnt}</td>
                            <td>{product.PrecioPromo}</td>
                            <td>
                                <img src={imageURLs[product.ID]} alt="Product" width="200" height="200" />
                            </td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(product)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(product.ID)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showForm && (
                <div className="product-form">
                    <h3>{selectedProduct ? 'Edit Product' : 'Add Product'}</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPrecioAnt">
                            <Form.Label>Precio Antiguo</Form.Label>
                            <Form.Control
                                type="number"
                                name="PrecioAnt"
                                value={form.PrecioAnt}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrecioPromo">
                            <Form.Label>Precio Promoción</Form.Label>
                            <Form.Control
                                type="number"
                                name="PrecioPromo"
                                value={form.PrecioPromo}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formImgProducto">
                            <Form.Label>Imagen Producto</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {form.imgProducto && <img src={imageURLs.preview} alt="Preview" width="100" />}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {selectedProduct ? 'Update Product' : 'Add Product'}
                        </Button>
                        <Button variant="secondary" onClick={handleResetForm}>
                            Cancel
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default ProductCRUD;
