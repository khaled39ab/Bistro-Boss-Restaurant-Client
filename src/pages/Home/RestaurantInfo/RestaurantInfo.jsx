import bgImg from '../../../assets/home/chef-service.jpg';

const RestaurantInfo = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: 'no-repeat'
            }} className='bg-fixed py-48'>
            <div className="bg-white m-10 py-16 px-32">
                <h3 className='uppercase text-3xl mb-4 text-center'>Flavor Fest Restaurant</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nemo mollitia nam. Earum veniam animi quam fugiat, repellat repellendus commodi porro saepe autem suscipit incidunt, reiciendis deserunt delectus ex sint. Vero, laboriosam necessitatibus accusantium perspiciatis nobis iure rem libero assumenda amet tempore quam sequi expedita aspernatur labore qui, porro id?</p>
            </div>
        </div>
    );
};

export default RestaurantInfo;