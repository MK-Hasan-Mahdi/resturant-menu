import React from 'react';

const MenuData = ({ data }) => {
    return (
        <>
            <section className='mid-container'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 mt-14'>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Shoes!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default MenuData;