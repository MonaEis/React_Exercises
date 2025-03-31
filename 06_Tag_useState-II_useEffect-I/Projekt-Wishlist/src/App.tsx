import { useEffect, useState } from "react";
import "./App.css";
import AddToWishList from "./assets/components/AddToWishList";
import WishList from "./assets/components/WishList";

export type Wish = {
    id: string;
    title: string;
    priority: "high" | "low";
    completed: boolean;
};

function App() {
    const storedWishes = JSON.parse(localStorage.getItem("wishes") ?? "[]")

    const [wishes, setWishes] = useState<Wish[]>(storedWishes);

    useEffect(() => {
      localStorage.setItem("wishes", JSON.stringify(wishes))
      console.log("useEffect Test")
    }, [wishes])


    const deleteWish = (deleteId: string) => {
        setWishes((oldWishes) =>
            oldWishes.filter((wish) => wish.id !== deleteId)
        );
    };

    const changeWishFulfillment = (id: string, fulfilled: boolean) => {
        setWishes((oldWishes) => {
            return oldWishes.map((wish) => {
                if (wish.id !== id) {
                    return wish;
                } else {
                    return { ...wish, completed: fulfilled };
                }
            });
        });
    };

    return (
        <main>
            <h1>My Wishlist 🎄🎁</h1>
            <div>
                <WishList setWishes={setWishes} />
                <AddToWishList changeWishFulfillment={changeWishFulfillment} deleteWish={deleteWish} wishes={wishes} />
            </div>
        </main>
    );
}

export default App;
