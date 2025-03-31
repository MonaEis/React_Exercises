import { useState } from "react";
import type { Wish } from "../../App";

type WishListProps = {
    setWishes: React.Dispatch<React.SetStateAction<Wish[]>>;
};

const WishList = ({ setWishes }: WishListProps) => {
    const [wishInputValue, setWishInputValue] = useState("");

    const [prioritySelectValue, setPrioritySelectValue] = useState<
        "low" | "high"
    >("low");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const newWish: Wish = {
            id: crypto.randomUUID(),
            title: wishInputValue,
            completed: false,
            priority: prioritySelectValue,
        };
        console.log(newWish);
        setWishes((oldWishes) => [newWish, ...oldWishes]);
        setWishInputValue("");
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Add a wish to your list</h2>
                <div className="input">
                    <input
                        type="text"
                        value={wishInputValue}
                        onChange={(e) => {
                            setWishInputValue(e.target.value);
                        }}
                    />
                    <select name="priority" id="priority" defaultValue={""} onChange={(e)=>{
                        if(e.target.value === "high" || e.target.value === "low"){
                            setPrioritySelectValue(e.target.value)
                        } else {
                            console.log("Da ist wohl was falsch")
                        }
                    }}>
                        <option value="" disabled>
                            Selected Priority
                        </option>
                        <option value="high">high</option>
                        <option value="low">low</option>
                    </select>
                </div>
                <button disabled={wishInputValue.trim().length === 0}>Add wish</button>
            </form>
        </section>
    );
};

export default WishList;
