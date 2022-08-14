import React from 'react';

const Navbar = ({ filterItem }) => {
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
        </>
    );
};

export default Navbar;