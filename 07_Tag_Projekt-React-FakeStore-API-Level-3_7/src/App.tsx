import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

import CircularProgress from "@mui/material/CircularProgress";

export type Shop = {
    id: number;
    title: string;
    price: number;
    image: string;
};

function App() {
    const [products, setProducts] = useState<Shop[]>([]);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
      setLoading(true)
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
              console.log(error)
              setErrorMessage("Es ist ein Fehler aufgetreten!")
            }).finally(()=>{
              setLoading(false)
            });
    }, []);

    return (
        <main>
            <h1>SuperDuper-FakeShop</h1>
                {loading ?? <CircularProgress color="secondary" />}
            <div className="output">
                {!loading && (
                <ul>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>

                )}
            </div>
            <p className="error-message">{errorMessage}</p>
        </main>
    );
}

export default App;
