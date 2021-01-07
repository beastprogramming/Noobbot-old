import React, {useState, useEffect} from 'react';



function Offers() {
    // Fetch Data
    const [promos, setPromos] = useState({});
    useEffect(() => {
        fetch(`/api/resellers/promo-details.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O`)
        .then((response) => response.json())
        .then(setPromos);
    }, [])
    // Fetch Domains Information
    const [domainInfo, setDomainInfo] = useState({});
    useEffect(() => {
        fetch(`/domains.json`)
        .then((response) => response.json())
        .then(setDomainInfo);
    }, [])
    return (
        <>
        {/* {Object.keys(promos).map((offer, i) => {
            return(
            <p key={i}>{promos[offer].productkey}</p>
            )
        })} */}

        <section className="nb-py-8 nb-bg-gray-100">
            <div className="nb-container nb-p-4">
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 xl:nb-grid-cols-5 nb-my-8">
                    <div className="nb-p-4 nb-shadow-lg nb-rounded-md nb-bg-white">
                        <p className="nb-text-lg nb-font-bold nb-text-primary-bunty nb-pb-2 nb-border-b">.com</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Offers;