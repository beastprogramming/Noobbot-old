import React from "react";

import DomainRegisterHero from '../../components/hero/DomainRegisterHero';
import DomainTldOffer from '../../components/offer/TldOffer';
import WhyNoobbotForDomain from '../../components/features/FeatureTextOne';
import Tools from '../../components/features/FeatureRightOne.jsx'
import FAQ from '../../components/faq/FaqOne';


function RegisterADomain() {
    return(
        <>
            <DomainRegisterHero />
            <DomainTldOffer />
            <WhyNoobbotForDomain />
            <Tools />
            <FAQ />
        </>
    )
}
export default RegisterADomain;
