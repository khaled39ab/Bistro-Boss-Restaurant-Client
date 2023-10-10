import { Parallax } from 'react-parallax';

const MenuBar = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt={title}
            strength={300}
        >
            <div className="hero md:min-h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-[750px] bg-black bg-opacity-30 px-16 py-6">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subtitle ? <p className="uppercase font-medium">{subtitle}</p> : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae amet officiis ipsam ab quos deleniti mollitia eius voluptatibus omnis!"}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default MenuBar;