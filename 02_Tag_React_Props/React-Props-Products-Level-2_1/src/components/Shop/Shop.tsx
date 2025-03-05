import ShopItem from "../ShopItem/ShopItem"
import "./Shop.css"

import OilImg from "../../assets/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
import PolaroidImg from "../../assets/photo-1526170375885-4d8ecf77b99f.avif"
import DrinkImg from "../../assets/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.webp"

type shopItem = {
    productName: string;
    price: number;
    imgUrl: string;
};

const shopItemsArr: shopItem[] = [
    {
        productName: "Cocooil",
        price: 30,
        imgUrl: OilImg,
    },
    {
        productName: "Geile Kamera",
        price: 60,
        imgUrl: PolaroidImg,
    },
    {
        productName: "Was teures zum Trinken",
        price: 20,
        imgUrl: DrinkImg,
    },
]

const Shop = () => {
  return (
    <main>
     {shopItemsArr.map((singleItem) => (
        <ShopItem
            prodName = {singleItem.productName}
            prodPrice = {singleItem.price}
            prodImg = {singleItem.imgUrl}
        />
     ))}
    </main>
  )
}

export default Shop
