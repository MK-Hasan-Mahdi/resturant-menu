import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className='flex justify-center mt-10'>
                {
                    menuList.map(menu => {
                        return (
                            <div className="btn-group">
                                <button onClick={() => filterItem(menu)} className="btn">{menu}</button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

export default Navbar;