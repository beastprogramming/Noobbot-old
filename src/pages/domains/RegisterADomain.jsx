import React from "react";

import DomainRegisterHero from '../../components/hero/DomainRegisterHero';
import DomainTldOffer from '../../components/offer/TldOffer';
import WhyNoobbotForDomain from '../../components/features/FeatureTextOne';
import Tools from '../../components/features/FeatureRightOne.jsx'
import FAQ from '../../components/faq/FaqOne';


function RegisterADomain() {
    let faq = [
        {
            question:"What is Shared Web hosting?",
            answer:"In Shared Web Hosting, multiple clients are hosted on a single server i.e. the clients share the server's resources. This helps reduce the cost, since the cost of the server and its resources are spread over all the clients/packages hosted on the server. Shared Hosting is perfect for personal websites, small and mid-sized businesses that do not require all the resources of a server."
        },
        {
            question:"Can I host multiple Web sites within one Shared Hosting plan?",
            answer:"Yes! Our Pro and Business shared hosting plans allow you to host more than one Website, by adding secondary domains through your hosting control panel i.e. cPanel."
        },
        {
            question:"Is there a Money Back Guarantee?",
            answer:"Yes, we offer a 100% Risk Free, 30 day Money Back Guarantee."
        },
        {
            question:"Is Email hosting included in my package?",
            answer:"Yes, all our Hosting packages come with Unlimited Email Hosting."
        },
        {
            question:"Can I upgrade to a higher plan?",
            answer:"Yes, you can easily upgrade to one of our higher plans at any time."
        },
        {
            question:"Is my data safe? Do you take backups?",
            answer:"Yes, your data is a 100% secure and is backed-up every 5 days."
        },
        {
            question:"Do you include protection from viruses?",
            answer:"Yes, all our servers are protected by Clam AV."
        },
        {
            question:"Can I divide my Shared Hosting package and resell it?",
            answer:'While a Shared Hosting package cannot be used for this purpose, you can easily resell custom packages with our Reseller Hosting. To view our Reseller Hosting plans, <a href="#">click here.</a>'
        },
        {
            question:"Do you offer SSH access?",
            answer:"Yes, we provide SSH access to your domain. Because this is a shared environment, you will not get root access. However, you will be able to achieve most of your requirements by having the rights to access only the files relevant to your domain."
        },
        {
            question:"Who do I get in touch with if I need help?",
            answer:'Our Support team is always at hand to assist you. You can take a look at all our contact details <a href="#">here</a> .'
        }
    ];
    return(
        <>
            <DomainRegisterHero />
            <DomainTldOffer />
            <WhyNoobbotForDomain />
            <Tools />
            <FAQ faqs={faq}/>
        </>
    )
}
export default RegisterADomain;
