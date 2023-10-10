import MenuBar from "../../Shared/MenuBar/MenuBar";
import shopImg from '../../../assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <MenuBar title={'Our Shop'} subtitle={"Would you like to try our dish?"} img={shopImg}></MenuBar>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-16 ml-4 font-medium text-lg'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;