import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
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
                <Link to={`/order/${title}`}><button className="btn btn-outline border-b-4 uppercase">Order Your favorite Food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;