import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';


function Offers() {
    // Fetch Promo Price
    const [promos, setPromos] = useState({});
    useEffect(() => {
        fetch(`/api/resellers/promo-details.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O`)
        .then((response) => response.json())
        .then(setPromos);
    }, [])
    // Fetch Original Domain Price
    const [domainPrice, setDomainPrice] = useState({});
    useEffect(() => {
        fetch(`/api/products/customer-price.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O`)
        .then((response) => response.json())
        .then(setDomainPrice);
    }, [])
    // Fetch Domains Information
    const [domainInfo, setDomainInfo] = useState({});
    useEffect(() => {
        fetch(`/data/domains.json`)
        .then((response) => response.json())
        .then(setDomainInfo);
    }, [])
    return (
        <>
        <section className="nb-py-8 nb-bg-gray-100">
            <div className="nb-container nb-p-4">
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4  nb-gap-4 nb-my-8">
                
                {Object.keys(promos).map((offer, i) => {
                    return(
                    <div className="nb-shadow-sm hover:nb-shadow-lg nb-rounded-t-sm nb-bg-white" key={promos[offer].productkey}>
                        <div className="nb-p-4">

                            {Object.keys(domainInfo).map((di, dii) => {
                                 if(promos[offer].productkey === di ){
                                    return (
                                        <p className="nb-text-lg nb-font-bold nb-text-primary-bunty" key={dii}>
                                            { promos[offer].productkey === di ?(domainInfo[di].text): null }
                                        </p>
                                    )
                                 }else{
                                    return null
                                 }
                               
                            })}
                            <div className="nb-pt-2 nb-flex nb-justify-between nb-border-t">
                                <p className="nb-text-lg nb-font-bold nb-text-primary-blue">₹{promos[offer].customerprice} </p>
                                {Object.keys(domainPrice).map((dp, dpi) => {
                                   if(promos[offer].productkey === dp ){
                                        return (
                                                <p className="nb-text-md nb-font-bold nb-line-through nb-text-primary-bunty nb-opacity-50" key={dpi}>
                                                { '₹'+domainPrice[dp].addnewdomain[1] }
                                                </p>
                                            )
                                   }else{
                                        return null
                                   } 
                                })}
                                
                            </div>
                            <p className="nb-text-sm nb-font-bold nb-text-primary-red">Ends <Moment format="DD-MM-YYYY" unix>{promos[offer].endtime}</Moment></p>
                        </div>
                        <Link to="#" title="Apply Offer" target="_self" className="">
                            <div className="nb-p-2 nb-bg-primary-blue hover:nb-bg-primary-bunty  nb-font-bold nb-rounded-b-sm nb-text-white nb-w-auto nb-text-center">Apply Offer</div>
                        </Link>
                    </div>
                    )
                })} 
                </div>
            </div>
        </section>
        </>
    )
}

export default Offers;