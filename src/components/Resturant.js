import React, { useState } from 'react';
import Menu from './menuApi';
import MenuData from './MenuData';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const filterItem = (category) => {
        const updatedItemList = Menu.filter((currentElement) => {
            return currentElement.category === category;
        });
        setMenuData(updatedItemList);
    }
    return (
        <>
            <div className='flex justify-center mt-10'>
                <div className="btn-group">
                    <button onClick={() => setMenuData(Menu)} className="btn btn-active">All</button>
                    <button onClick={() => filterItem("breakfast")} className="btn">Breakfast</button>
                    <button onClick={() => filterItem("lunch")} className="btn">Lunch</button>
                    <button onClick={() => filterItem("dinner")} className="btn">Dinner</button>
                </div>
            </div>
            <MenuData data={menuData} />
        </>
    );
};

export default Resturant;