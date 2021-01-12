import React from 'react';

function DomainRegisterCTA() {
    return(
        <>
            <div className="nb-bg-gray-100 nb-p-4">
                <div className="nb-container">
                    <div className="nb-flex nb-flex-col lg:nb-flex-row nb-items-center">
                        <div className="nb-text-xl nb-mb-1 lg:nb-mb-0 lg:nb-text-lg nb-font-medium nb-text-primary-bunty nb-text-center nb-w-full lg:nb-w-1/4">It all start with a domain</div>
                        <form className="nb-w-full lg:nbw-3/4 nb-flex nb-flex-col md:nb-flex-row md:nb-items-center" action="" method="">
                            <input className="nb-rounded-l nb-w-full nb-h-12 nb-border-primary-blue focus:nb-border-primary-blue focus:nb-outline-0 nb-border-2 nb-border-r-2 md:nb-border-r-0 nb-p-2 nb-bg-transparent focus:nb-bg-transparent nb-text-primary-bunty nb-text-xl nb-mb-2 md:nb-mb-0" type="nb-text" name="domain" placeholder="Find your ideal domain name." autoComplete="off" />
                            <input className="nb-rounded-r nb-h-12 nb-border-primary-blue nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-blue nb-text-white nb-cursor-pointer" type="submit" value="Find Domain" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DomainRegisterCTA