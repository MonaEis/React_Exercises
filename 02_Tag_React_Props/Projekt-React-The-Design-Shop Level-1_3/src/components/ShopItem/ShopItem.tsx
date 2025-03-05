import "./ShopItem.css";

type ShopItemProps = {
    imageProd: string;
    priceProd: number;
    nameProd: string;
};

const ShopItem = (props: ShopItemProps) => {
    return (
        <div className="single-item">
            <img src={props.imageProd} alt={props.nameProd}/>
            <h4>{props.nameProd}</h4>
            <p>$ {props.priceProd}</p>
        </div>
    )
};

export default ShopItem;
