import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div className="my-8">
            <div className='grid md:grid-cols-2 gap-10 mt-10 px-3'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline border-b-4 uppercase">Order Your favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;