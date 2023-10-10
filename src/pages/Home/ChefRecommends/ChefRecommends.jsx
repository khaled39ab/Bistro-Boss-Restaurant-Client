import salad from '../../../assets/home/slide1.jpg';
import pizza from '../../../assets/home/slide2.jpg';
import soup from '../../../assets/home/slide3.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommends = () => {
    return (
        <div className='my-16'>
            <SectionTitle
                heading={'Chef Recommends'}
                subheading={'Should Try'}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-8 mt-10 pl-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={salad} alt="Caeser Salad" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn  btn-outline border-b-4 uppercase">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={pizza} alt="Caeser Pizza" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn  btn-outline border-b-4 uppercase">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={soup} alt="Caeser Soup" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Caeser Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn  btn-outline border-b-4 uppercase">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChefRecommends;