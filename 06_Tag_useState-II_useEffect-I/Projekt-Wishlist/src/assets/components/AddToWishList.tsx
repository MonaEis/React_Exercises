import { Wish } from "../../App";
import WishItem from "./WishItem";

type AddToWishListProps = {
    wishes: Wish[];
    deleteWish: (deleteId: string) => void
    changeWishFulfillment: (id: string, fulfilled: boolean) => void
}

const AddToWishList = ({wishes, deleteWish, changeWishFulfillment}: AddToWishListProps) => {
    return (
        <ul>
            {wishes.map((wish)=> (
                <WishItem key={wish.id} wish={wish} deleteWish={deleteWish} changeWishFulfillment={changeWishFulfillment}/>
            ))}
        </ul>
    );
};

export default AddToWishList;
