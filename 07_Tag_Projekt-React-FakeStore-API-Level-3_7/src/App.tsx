import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

export type Shop = {
    id: number;
    title: string;
    price: number;
    image: string;
};

function App() {
    const [products, setProducts] = useState<Shop[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <main>
            <h1>SuperDuper-FakeShop</h1>
            <div className="output">
                <ul>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default App;
