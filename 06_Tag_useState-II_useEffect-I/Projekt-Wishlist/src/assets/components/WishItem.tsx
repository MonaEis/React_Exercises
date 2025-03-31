import { Wish } from "../../App"

type WishItemProps = {
  wish: Wish;
  deleteWish: (id: string) => void;
  changeWishFulfillment: (id: string, fulfilled: boolean) => void;
}



function WishItem({wish, deleteWish, changeWishFulfillment}: WishItemProps){
  const handleDeleteClick = ()=> {
    deleteWish(wish.id);
  }

  const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.checked;
    changeWishFulfillment(wish.id, newValue)
  }
  
  return (
    <div className="output">
            <li>
              <input type="checkbox" name="checked" id="checked" checked={wish.completed} onChange={handleCheckboxClick} />
              <span className={`${wish.priority === "low" ? "low": "high"} ${wish.completed === true ? "completed" : ""}`}>{wish.title}</span>
              <button onClick={handleDeleteClick} className="delete">Delete</button>
            </li>
        </div>
  )
}

export default WishItem
