
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div className="flex">
            <img className="w-32 mr-2" style={{ borderRadius: '0 280px 280px 280px' }} src={image} alt="" />
            <div>
                <h3 className="text-xl uppercase ">{name}</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506] text-xl ">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;