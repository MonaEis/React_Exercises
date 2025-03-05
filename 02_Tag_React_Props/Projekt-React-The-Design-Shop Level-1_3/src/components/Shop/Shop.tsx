import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
import SpeakerImg from "../../assets/01-Home.png";
import HeadphoneImg from "../../assets/29-Lifestyle_b-o.png";
import CreativeImg from "../../assets/01-Books.png";
import BackpackImg from "../../assets/02-Lifestyle.png";
import PrintImg from "../../assets/46-Home_bm.png";
import SofaImg from "../../assets/45-Home_hem.png";

type shopItem = {
    productName: string;
    price: number;
    imgUrl: string;
};

const shopItemsArr: shopItem[] = [
    {
        productName: "Vifa Copenhagen 2.0 Loudspeaker",
        price: 799.0,
        imgUrl: SpeakerImg,
    },
    {
        productName: "Bang & Olufsen Wireless Headphones",
        price: 174.0,
        imgUrl: HeadphoneImg,
    },
    {
        productName: "Poketo: Creative Spaces",
        price: 25.0,
        imgUrl: CreativeImg,
    },
    {
        productName: "Ucon Acrobatics Hajo Backpack",
        price: 79.0,
        imgUrl: BackpackImg,
    },
    {
        productName: "Summer Print by Bratislav Milenkovic",
        price: 27.0,
        imgUrl: PrintImg,
    },
    {
        productName: "Paolo Modular Coner Sofa by Hem",
        price: 3699.0,
        imgUrl: SofaImg,
    },
];

const Shop = () => {
    return (
        <main>
            {shopItemsArr.map((singleItem) => (
                <ShopItem
                    imageProd={singleItem.imgUrl}
                    nameProd={singleItem.productName}
                    priceProd={singleItem.price}
                />
            ))}
        </main>
    );
};

export default Shop;
