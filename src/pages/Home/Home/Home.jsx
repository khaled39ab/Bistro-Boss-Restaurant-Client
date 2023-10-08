import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CellNumber from "../CellNumber/CellNumber";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CellNumber />
            <ChefRecommends />
        </div>
    );
};

export default Home;