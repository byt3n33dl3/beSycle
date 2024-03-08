import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Cervelo</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Orbea</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Pinarello</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>TREK</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Bianchi</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>SAVA</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h1>S_Works</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
