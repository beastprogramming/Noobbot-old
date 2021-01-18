import React from 'react';

function FeatureList(props) {
    return(
        <>
            <section className="nb-py-8">
                <div className="nb-container">
                <p className="nb-text-3xl nb-text-primary-bunty nb-font-bold nb-text-center nb-mb-4">{props.title}</p>

                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4">
                        {props.features.map((feature,index) =>(
                            <div key={index} className="nb-p-2 ">
                                <p className="nb-text-xl nb-text-primary-blue nb-font-bold nb-mb-8 nb-text-left">{feature.title}</p>

                                <ul className="nb-flex nb-justify-center nb-flex-col">
                                    {feature.lists.map((list, index) =>(
                                        <li key={index} className="nb-border-l-2 hover:nb-shadow-lg nb-transition-all nb-text-sm nb-font-bold nb-text-primary-bunty nb-border-primary-blue nb-p-2 nb-mb-4 "><div className="nb-flex nb-items-center"><i className="la la-check-circle nb-text-xl nb-mr-2 nb-text-primary-green"></i><p>{list.title}</p></div></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureList;