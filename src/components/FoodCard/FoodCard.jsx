
const FoodCard = ({foodImg, foodName}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={foodImg} alt={`Caesar ${foodName}`} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Caesar {foodName}</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                    <button className="btn  btn-outline border-b-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;