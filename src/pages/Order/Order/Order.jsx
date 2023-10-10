import MenuBar from "../../Shared/MenuBar/MenuBar";
import shopImg from '../../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <MenuBar title={'Our Shop'} subtitle={"Would you like to try our dish?"} img={shopImg}></MenuBar>
        </div>
    );
};

export default Order;