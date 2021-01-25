import React from 'react'

function NegativeIconFeature(props) {
    return (
        <section className="nb-py-8">
            <div className="nb-container nb-p-4">
                <p className="nb-text-2xl lg:nb-text-3xl nb-font-bold nb-text-left nb-text-primary-bunty nb-mb-2">{props.title}</p>
                <p className="nb-text-sm lg:nb-text-lg nb-font-bold nb-text-left nb-text-primary-bunty nb-opcity-75 ">{props.description}</p>

                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 nb-gap-4 nb-mt-20">
                    {props.features.map((feature, index) => (
                        <div className="nb-rounded-sm nb-p-4 nb-bg-blue-50">
                            <img src={feature.icon} alt={feature.alt} className="nb-h-16 nb-w-16 nb--mt-12 nb-mb-4" />
                            <p className="nb-text-primary-blue nb-text-lg nb-font-bold nb-mb-2">{feature.title}</p>
                            <p className="nb-text-primary-bunty nb-text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default NegativeIconFeature;