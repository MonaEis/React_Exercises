import "./Rezepte.css";
import FrikadelleImg from "../../assets/frikadellen.jpeg";
import GinTonicImg from "../../assets/glass.jpeg";
import PizzaBasilicumImg from "../../assets/pizza.jpeg";
import PizzaOlivenImg from "../../assets/pizza2.jpeg";
import SalatImg from "../../assets/salat.jpeg";
import ScampiImg from "../../assets/scampi.jpeg";
import SpagetthiImg from "../../assets/spagetthi.jpeg";
import HummusImg from "../../assets/teller.jpeg";
import RezeptItem from "../RezeptItem/RezeptItem";

type rezeptItem = {
    id: number;
    productImage: string;
    productName: string;
    productDescription: string;
    produchtPrice: number;
}

const rezeptArray: rezeptItem[] = [
    {
        id: 1,
        productImage: HummusImg,
        productName: "Hummus mit Crackern",
        productDescription: "Cremiger Hummus serviert mit knusprigen Crackern.",
        produchtPrice: 7.99
    },
    {
        id: 2,
        productImage: SpagetthiImg,
        productName: "Spaghetti mit Trüffel",
        productDescription: "Feine Spaghetti mit edlem Trüffel und Parmesan.",
        produchtPrice: 15.99
    },
    {
        id: 3,
        productImage: ScampiImg,
        productName: "Asiatische Scampi",
        productDescription: "Saftige Scampi auf asiatischem Gemüse mit würziger Sauce.",
        produchtPrice: 18.99
    },
    {
        id: 4,
        productImage: SalatImg,
        productName: "Bunter Gemüsesalat",
        productDescription: "Frischer Salat mit knackigem Gemüse und hausgemachtem Dressing.",
        produchtPrice: 9.99
    },
    {
        id: 5,
        productImage: PizzaOlivenImg,
        productName: "Pizza Salami & Oliven",
        productDescription: "Knusprige Pizza mit würziger Salami, Oliven und Tomatensauce.",
        produchtPrice: 12.99
    },
    {
        id: 6,
        productImage: PizzaBasilicumImg,
        productName: "Pizza Salami & Basilikum",
        productDescription: "Leckere Pizza mit extra viel Käse, frischem Basilikum und Salami.",
        produchtPrice: 13.99
    },
    {
        id: 7,
        productImage: FrikadelleImg,
        productName: "Frikadellen auf Salat",
        productDescription: "Herzhafte Frikadellen serviert auf einem frischen Salatbett.",
        produchtPrice: 11.99
    },
    {
        id: 8,
        productImage: GinTonicImg,
        productName: "Gin Tonic mit Zitrone",
        productDescription: "Erfrischender Gin Tonic mit Zitronenscheiben und Eiswürfeln.",
        produchtPrice: 8.99
    }
];


const Rezepte = () => {
  return (
    <main>
        <section>
            {rezeptArray.map((singleItem) => (
        <RezeptItem
        key={singleItem.id}
        rezeptImage={singleItem.productImage}
        rezeptName={singleItem.productName}
        rezeptDescription={singleItem.productDescription}
        rezeptPrice={singleItem.produchtPrice}
        />
    ))}
        </section>
    
    </main>
  )
}

export default Rezepte
