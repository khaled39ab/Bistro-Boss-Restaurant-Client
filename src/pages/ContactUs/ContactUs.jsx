import MenuBar from "../Shared/MenuBar/MenuBar";
import contactImg from '../../assets/contact/contact.jpg'

const ContactUs = () => {
    return (
        <div>
            <MenuBar title={'contact us'} subtitle={'would you like try a dish?'} img={contactImg}></MenuBar>
        </div>
    );
};

export default ContactUs;