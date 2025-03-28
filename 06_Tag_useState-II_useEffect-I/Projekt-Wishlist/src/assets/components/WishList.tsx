import AddToWishList from "./AddToWishList";

const WishList = () => {
    return (
        <section>
            <article>
                <h2>Add a wish to your list</h2>
                <div className="input">
                    <input type="text" />
                    <select name="priority" id="priority">
                        <option value="" selected disabled>
                            Selected Priority
                        </option>
                        <option value="high">high</option>
                        <option value="low">low</option>
                    </select>
                </div>
                <button>Add wish</button>
            </article>

            <AddToWishList />
        </section>
    );
};

export default WishList;
