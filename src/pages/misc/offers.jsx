import React, {useState, useEffect} from 'react';



function Offers() {
    // Fetch Data
    const [promos, setPromos] = useState({});
    useEffect(() => {
        fetch(`/api/resellers/promo-details.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O`)
        .then((response) => response.json())
        .then(setPromos);
    }, [])

    return (
        <>
        {promos.map((promo,i) => {
            return(
            <p key={i}>{promo.i.productkey}</p>
            )
        })}
        </>
    )
}

export default Offers;