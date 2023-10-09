import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div className='my-16 featured-item bg-fixed py-4'>
            <SectionTitle
                heading={"Featured Item"}
                subheading={'Check it out'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center px-48 py-8 mb-28  bg-black bg-opacity-40'>

                <img className='w-[400px]' src={featuredImg} alt="" />

                <div className='md:ml-8 text-white p-5'>
                    <p className='font-bold'>Oct 9, 2023</p>
                    <h3 className='uppercase text-lg'>Where I Can Get Some?</h3>
                    <p className='text-justify my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate impedit earum totam, quam esse consequatur possimus asperiores beatae quo obcaecati corrupti cum incidunt, aspernatur repudiandae dolorem neque, velit provident.</p>
                    <button className="btn btn-outline border-0  border-b-4 text-white mt-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;