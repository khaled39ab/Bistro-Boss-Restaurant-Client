import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CellNumber from "../CellNumber/CellNumber";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CellNumber />
            <ChefRecommends />
            <FeaturedItem />
        </div>
    );
};

export default Home;