import React from 'react'

function HeadingStandard(props){
    return(
        <>
        <div className="nb-text-center nb-my-4 md:nb-my-8 lg:nb-my-12">
            <p className="nb-text-3xl lg:nb-text-5xl nb-mb-2 nb-font-bold nb-text-primary-bunty nb-tracking-wide">
                {props.title}
            </p>
            <p className="nb-text-xl lg:nb-text-3xl nb-font-semibold nb-text-primary-blue nb-tracking-wide">
                {props.subtitle}
            </p>
        </div>
        </>
    )
}

export default HeadingStandard;