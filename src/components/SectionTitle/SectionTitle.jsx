
const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-[#D99904] italic text-lg mb-2">--- {subheading} ---</p>
            <h3 className="uppercase text-4xl border-y-4 border-opacity-40 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;