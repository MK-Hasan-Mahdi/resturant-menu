import React, { useState } from 'react';
import Menu from './menuApi';
import MenuData from './MenuData';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);
    return (
        <>
            <MenuData data={menuData} />
        </>
    );
};

export default Resturant;