import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div className='my-16 featured-item py-4'>
            <SectionTitle
                heading={"Featured Item"}
                subheading={'Check it out'}
            ></SectionTitle>

            <div className='md:flex items-center px-12 pt-8 pb-8'>
                <div className=''>
                    <img src={featuredImg} alt="" />
                </div>

                <div className='md:ml-8 text-white'>
                    <p className='font-bold'>Oct 9, 2023</p>
                    <h3 className='uppercase text-lg'>Where I Can Get Some?</h3>
                    <p className='text-justify my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate impedit earum totam, quam esse consequatur possimus asperiores beatae quo obcaecati corrupti cum incidunt, aspernatur repudiandae dolorem neque, velit provident.</p>
                    <button className="btn btn-outline text-white border-b-4 mt-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;