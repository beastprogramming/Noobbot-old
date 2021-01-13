import React from 'react';

function RelatedProducts() {
    return (
        <>
        <section className="nb-py-8">
            <div className="nb-container nb-p-4">
                <div className="nb-py-8">
                    <div className="nb-text-3xl nb-font-semibold nb-text-center nb-text-primary-bunty nb-mb-8">Maybe, you are looking these.</div>

                    <div className="nb-grid nb-grid-cols-4 nb-gap-4">
                        <div className="nb-shadow-md nb-bg-white ">
                            <img src="https://home.pl/img/cms/f0ab6787-f1dd-47e0-b621-313323796ad4/office-365-business-medium.jpg?version=0" alt="Pricing Header" className="nb-w-full nb-rounded-t-lg" />
                            <div className="nb-flex nb-justify-center nb-items-center nb-h-16 nb-w-16 nb-p-2 nb-bg-white nb-rounded-md nb--mt-9 nb-mb-4 nb-ml-4 nb-shadow-lg nb-relative">
                                <img src="https://home.pl/img/cms/75d8d722-fdca-4446-b08b-0c2d73d24885/office-365-logo-fluent-design.png?version=0" alt="Logo" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        </>
    )
}
export default RelatedProducts;