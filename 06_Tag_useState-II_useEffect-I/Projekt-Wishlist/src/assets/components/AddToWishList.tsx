const AddToWishList = () => {
    return (
        <div className="output">
            <p>Santa's inbox is empty!</p>
            <div className="output-items">
                <div className="wishlist-item">
                    <input type="checkbox" name="check" id="check" />
                    <div className="low high single-item">
                        <p>Handy</p>
                    </div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AddToWishList;
