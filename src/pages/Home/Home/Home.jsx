import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CellNumber from "../CellNumber/CellNumber";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CellNumber />
            <ChefRecommends />
            <FeaturedItem />
            <Testimonial />
        </div>
    );
};

export default Home;