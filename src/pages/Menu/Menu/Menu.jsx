import PageHelmet from "../../../components/PageHelmet/PageHelmet";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import menuImg from '../../../assets/menu/menu.jpg'

    
const Menu = () => {
    return (
        <div>
            <PageHelmet pageName={'Menu'}></PageHelmet>
            <MenuBar title={'Our Menu'} subtitle={'Would you like to try our dish?'} img={menuImg}/>
        </div>
    );
};

export default Menu;