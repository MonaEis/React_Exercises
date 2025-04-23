import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
};

const ProductListWindsurf: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListWindsurf;

