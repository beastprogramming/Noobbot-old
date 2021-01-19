import React from 'react'

function FeatureWithImageAndLists(props) {
    return(
        <>
            <section className="nb-py-8">
                <div className="nb-container nb-p-4">
                    <p className="nb-text-2xl lg:nb-text-3xl nb-font-bold nb-text-primary-bunty nb-text-center nb-mb-2">{props.title}</p>
                    <p className="nb-text-lg lg:nb-text-xl nb-text-primary-bunty nb-opacity-75 nb-text-center nb-mb-8">{props.description}</p>
                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-2 nb-gap-4">
                        {props.features.map((feature, index) => (
                            <div key={index} className="nb-bg-white nb-shadow-md hover:nb-shadow-lg nb-rounded-sm nb-border-l-4 nb-border-primary-blue nb-p-4 nb-flex nb-items-center">
                               <img src={feature.icon} alt={feature.alt} className="nb-mr-2 nb-h-16 nb-w-16" />

                               <div>
                                <p className="nb-text-lg nb-font-bold nb-text-primary-blue ">{feature.title}</p>
                                <p className="nb-text-sm nb-text-primary-bunty nb-tracking-wide">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureWithImageAndLists