import React from 'react'

function SpecificationLists(props) {
    return (
        <>
            <section className="nb-py-8">
                <div className="nb-container">
                    <p className="nb-text-2xl lg:nb-text-3xl nb-text-center nb-text-primary-bunty nb-font-bold nb-mb-8">{props.title}</p>
                    <ul className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 nb-gap-4">
                        {props.specifications.map((specification, index) => (
                            <li key={index} className="nb-transition-all nb-flex nb-items-start nb-bg-gray-100 nb-p-4 nb-rounded-sm hover:nb-bg-primary-blue nb-group"><i className="la la-check-circle nb-text-lg nb-font-bold nb-text-primary-green group-hover:nb-text-white nb-mr-2"></i> <p className="nb-text-primary-bunty group-hover:nb-text-white nb-font-bold nb-text-md">{specification.title}</p></li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SpecificationLists;