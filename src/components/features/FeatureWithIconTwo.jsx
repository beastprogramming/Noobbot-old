import React from 'react'

function FeatureWithIconTwo(props) {
    return(
        <>
            <section className="nb-py-8">
                <div className="nb-container">
                    <p className="nb-text-center nb-text-3xl nb-text-primary-bunty nb-font-bold nb-mb-16">{props.title}</p>

                    <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-3 nb-gap-4 nb-mb-16">
                    {props.features.map((feature) => (
                        <div className="nb-transition-all nb-border-t-2 hover:nb-border-t-4 nb-border-primary-blue nb-p-4 nb-rounded-sm nb-bg-blue-50 hover:nb-bg-white hover:nb-shadow-lg">
                            <div className="nb-mb-2 nb-flex nb-justify-center">
                                <img src={feature.icon} alt={feature.alt} className="nb-h-20 nb-w-20" />
                            </div>
                            <p className="nb-text-center nb-text-lg nb-text-primary-bunty nb-font-bold nb-mb-2">{feature.title}</p>
                            <p className="nb-text-center nb-text-md nb-text-primary-bunty nb-opacity-60 nb-font-bold">{feature.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureWithIconTwo;