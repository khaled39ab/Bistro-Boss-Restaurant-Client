import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');

    return (
        <div className='my-16'>
            <SectionTitle
                heading={'From Our Menu'}
                subheading={'Popular Menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-10 px-3'>
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline border-b-4">View All Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;