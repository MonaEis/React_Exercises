import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductListCopilot: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListCopilot;