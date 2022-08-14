import React, { useState } from 'react';
import Menu from './menuApi';
import MenuData from './MenuData';
import Navbar from './Navbar';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    // new array created for making unique category ; category name was repeated
    const uniqueList = [
        ...new Set(Menu.map(uniq => {
            return uniq.category;
        }))];
    console.log(uniqueList);
    // item filtered for category wise menu show
    const filterItem = (category) => {
        const updatedItemList = Menu.filter((currentElement) => {
            return currentElement.category === category;
        });
        setMenuData(updatedItemList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} />
            <MenuData data={menuData} />
        </>
    );
};

export default Resturant;