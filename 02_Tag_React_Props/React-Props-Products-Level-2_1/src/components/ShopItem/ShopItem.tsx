type shopItemsProps = {
    prodName: string;
    prodPrice: number;
    prodImg: string;
};

const ShopItem = (props: shopItemsProps) => {
  return (
    <div>
      <img src={props.prodImg} alt={props.prodName} />
      <h5>{props.prodName}</h5>
      <p>$ {props.prodPrice}</p>
      <button>BUY NOW</button>
    </div>
  )
}

export default ShopItem
