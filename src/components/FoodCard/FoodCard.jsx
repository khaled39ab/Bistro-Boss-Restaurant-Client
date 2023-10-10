
const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={`Caesar ${name}`} className="rounded-xl" /></figure>
            <p className="absolute right-0 mt-5 mr-6 bg-black text-white px-3">${price}</p>

            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Caesar {name}</h2>
                <p>{recipe ? recipe : 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}</p>
                <div className="card-actions">
                    <button className="btn  btn-outline border-b-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;