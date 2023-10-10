import salad from '../../../assets/home/slide1.jpg';
import pizza from '../../../assets/home/slide2.jpg';
import soup from '../../../assets/home/slide3.jpg';
import FoodCard from '../../../components/FoodCard/FoodCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommends = () => {
    return (
        <div className='my-16'>
            <SectionTitle
                heading={'Chef Recommends'}
                subheading={'Should Try'}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-8 mt-10 pl-3'>

                <FoodCard foodImg={salad} foodName={'Salad'}></FoodCard>
                <FoodCard foodImg={pizza} foodName={'Pizza'}></FoodCard>
                <FoodCard foodImg={soup} foodName={'Soup'}></FoodCard>

            </div>
        </div>
    );
};

export default ChefRecommends;