import React, {useState} from 'react';


function PricingTabs(props){
    const [toggleTab, setTabs] = useState(0);

    const handleToggle = (index) => {
        setTabs(index)
    }
    return(
        <>
            <section className="nb-py-8">
                <div className="nb-container nb-p-4">
                <ul className="nb-flex nb-items-center nb-justify-center">
                    {props.tabLists.map((list,index) => (

                    <li key={index} onClick={ () => handleToggle(index) } className={`nb-flex nb-items-center nb-border-2 nb-border-r nb-border-primary-blue nb-py-2 nb-px-6 hover:nb-bg-primary-blue hover:nb-text-white nb-cursor-pointer nb-font-bold ${toggleTab === index ? "nb-bg-primary-blue nb-text-white" : "nb-text-primary-blue nb-bg-white"}`}>
                    <img
                        className="nb-mr-1 nb-h-6"
                        src={list.icon}
                        alt={list.iconAlt}
                    />
                    {list.text}
                    </li>

                    ))}
                </ul>
                {props.tabContents.map((content, index) => (

                <div key={index} className={toggleTab === index ? "nb-block" : "nb-hidden"}>
                    <p className="nb-text-md lg:nb-text-xl nb-font-semibold nb-text-primary-bunty nb-tracking-wide nb-my-6 nb-text-center">{content.title}</p>
                    {props.children}
                </div>

                ))}
                    
                <p className="nb-text-md lg:nb-text-xl nb-font-semibold nb-text-primary-bunty nb-tracking-wide nb-mt-6 nb-text-center">
                If not satisfied, get your money back by cancelling within 30 days
                </p>
                </div>
            </section>
        </>
    )
}

export default PricingTabs;