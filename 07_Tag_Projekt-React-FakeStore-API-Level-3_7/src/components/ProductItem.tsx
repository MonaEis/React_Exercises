import { Shop } from "../App";

type ProductItemProps = {
    product: Shop;
};

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <li>
            <div className="zoom">
                <img src={product.image} alt={product.title} />
            </div>
            <p className="title">{product.title}</p>
            <p className="price">{product.price} €</p>
            <a href="#">Show more</a>
        </li>
    );
};

export default ProductItem;
