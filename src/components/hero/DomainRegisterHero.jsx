import React from 'react';

function DomainRegisterHero() {
    return(
    <>
        <section className="nb-py-8">
            <div className="nb-container">
                <h1 className="nb-text-2xl lg:nb-text-4xl nb-text-center nb-font-bold nb-text-primary-bunty nb-mb-2">Get the Best
                    Domain for your Business</h1>
                <h2 className="nb-text-sm lg:nb-text-2xl nb-text-center nb-font-medium nb-text-primary-blue nb-mb-4">Register with Noobbot and avail
                    ₹6000 worth of Free Services with every Domain you Register</h2>
            </div>
            <div className="nb-container nb-bg-white">
                <form className="nb-w-full nb-flex nb-flex-col md:nb-flex-row md:nb-items-center" action="" method="">
                    <input
                        className="nb-rounded-l nb-w-full nb-h-16 nb-border-primary-blue focus:nb-border-primary-blue focus:nb-outline-0 nb-border-2 nb-border-r-2 md:nb-border-r-0 p-2 nb-bg-transparent focus:nb-bg-transparent nb-text-primary-bunty nb-text-xl nb-mb-2 md:nb-mb-0"
                        type="text" name="domain" placeholder="Find your ideal domain name." autoComplete="off" />
                    <input
                        className="nb-rounded-r nb-h-16 nb-border-primary-blue nb-border-2 p-2 nb-text-xl nb-font-bold nb-bg-primary-blue nb-text-white cursor-pointer"
                        type="submit" value="Find Domain" />
                </form>
            </div>
        </section>
    </>
    )
}
export default DomainRegisterHero;