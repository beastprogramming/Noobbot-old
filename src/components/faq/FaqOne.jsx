import React from 'react';

function FaqOne(props) {
      
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
                        {props.faqs.map((faq, index) => (

                        <li key={index} className="nb-flex nb-align-center nb-flex-col nb-mb-2" onClick={handleFaq}>
                            <h4 className="nb-flex nb-justify-between nb-items-center nb-cursor-pointer nb-px-5 nb-py-2 h-8 nb-bg-gray-200 nb-text-primary-bunty nb-font-bold hover:nb-opacity-75s hover:nb-mb-3" >
                                {faq.question} <i className="las la-angle-down nb-text-2xl"></i></h4>
                            <p className="nb-faq-detail nb-py-5 nb-px-5 nb-hidden">
                                {faq.answer}
                            </p>
                        </li>

                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FaqOne;