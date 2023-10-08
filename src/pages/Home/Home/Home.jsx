import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CellNumber from "../CellNumber/CellNumber";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CellNumber />
        </div>
    );
};

export default Home;