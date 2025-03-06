type RezeptItemProps = {
    rezeptImage: string;
    rezeptName: string;
    rezeptDescription: string;
    rezeptPrice: number;

}

const RezeptItem = (props: RezeptItemProps) => {
  return (
    <div>
        <img src={props.rezeptImage} alt={props.rezeptName} />
        <h5>{props.rezeptName}</h5>
        <p>{props.rezeptDescription}</p>
        <h6>{props.rezeptPrice}</h6>
      
    </div>
  )
}

export default RezeptItem
