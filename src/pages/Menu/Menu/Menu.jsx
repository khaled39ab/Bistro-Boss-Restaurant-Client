import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import menuImg from '../../../assets/menu/menu.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className="mb-16">
            <PageHelmet pageName={'Menu'}></PageHelmet>

            <MenuBar title={'Our Menu'} subtitle={'Would you like to try our dish?'} img={menuImg} />

            <SectionTitle subheading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory title={'salads'} items={offered}></MenuCategory>

            <MenuBar title={'desserts'} img={dessertImg} />
            <MenuCategory title={'desserts'} items={desserts}></MenuCategory>

            <MenuBar title={'pizza'} img={pizzaImg} />
            <MenuCategory title={'pizza'} items={pizza}></MenuCategory>

            <MenuBar title={'salads'} img={saladsImg} />
            <MenuCategory title={'salads'} items={salads}></MenuCategory>

            <MenuBar title={'soup'} img={soupImg} />
            <MenuCategory title={'soup'} items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;