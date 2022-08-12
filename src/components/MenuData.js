import React from 'react';

const MenuData = ({ data }) => {
    return (
        <>
            <section className='mid-container'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 mt-14'>
                    {
                        data.map(item => {
                            const { id, name, category, description, image } = item;
                            return (
                                <>
                                    <div key={id}>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src={image} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{name}</h2>
                                                <p>{description}</p>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary">{category}</button>
                                                </div>
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