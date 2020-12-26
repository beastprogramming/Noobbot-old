import React from 'react';

function FaqOne() {
      
    const handleFaq = (e) => {
        let clickedItem = e.currentTarget;
        clickedItem.querySelector(".nb-faq-detail").classList.toggle("nb-block");
        clickedItem.querySelector(".nb-faq-detail").classList.toggle("nb-hidden");
      };
    return(
        <>
            <section className="nb-py-8">
                <div className="nb-container">
                    <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-font-bold nb-mb-8 nb-text-primary-bunty nb-leading-tight">Frequently Asked Questions About
                        Domains</h2>
                    <ul className="">
                        <li className="nb-flex nb-align-center nb-flex-col nb-mb-2" onClick={handleFaq}>
                            <h4 className="nb-flex nb-justify-between nb-items-center nb-cursor-pointer nb-px-5 nb-py-2 h-8 nb-bg-gray-200 nb-text-primary-bunty nb-font-bold hover:nb-opacity-75s hover:nb-mb-3" >
                                What is a Domain Name? <i className="las la-angle-down nb-text-2xl"></i></h4>
                            <p className="nb-faq-detail nb-py-5 nb-px-5 nb-hidden">
                                A Domain Name is a textual version of an IP Address, the nunb-mber that points to a particular website.
                                For example, the nunb-mber 206.190.60.37 is the IP Address for noobbot.com. Each domain name on the
                                Internet corresponds to such numbers.

                                Without domain names, each and every website would have to be recalled by a nunb-mber like this,
                                similar to the telephone system, but much more difficult to remenb-mber. For this reason, domain names
                                were introduced, and have made navigation on the net much simpler.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FaqOne;