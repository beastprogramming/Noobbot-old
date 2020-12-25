import React from 'react';

function FeatureTextOne() {
    return(
        <>
        <section className="nb-py-8">
            <div className="nb-container ">
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2">
                    <div className="lg:nb-pl-4 md:nb-border-r-2 nb-border-primary-bunty nb-border-opacity-25 nb-mb-2">
                        <h2 className="nb-text-2xl md:nb-text-3xl lg:nb-text-4xl nb-text-primary-bunty nb-font-bold nb-italic nb-leading-tight">Why should you get your domain through Noobbot?
                        </h2>
                    </div>
                    <div className="lg:nb-pl-4">
                        <p>There are seven reasons for you to choose Noobbot for your business domain name.</p>
                    </div>
                </div>
                <div className="nb-grid nb-grid-cols-1 md:nb-grid-cols-2 lg:nb-grid-cols-4 gap-4 nb-my-8">
                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-envelope-open nb-text-primary-blue" title="Free Email Account Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Free Email Account</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Receive 2 personalized Email Addresses such as mail@yourdomain.com
                            with free fraud, spam and virus protection.</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-globe-asia nb-text-primary-red" title="Domain Forwarding Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Domain Forwarding</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Point your domain name to another website for free! Redirect users
                            when they type your domain name into a browser (with/without domain masking & SEO)</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-terminal nb-text-primary-bunty" title="DNS Management Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">DNS Management</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Free lifetime DNS service which allows you to manage your DNS records
                            on our globally distributed and highly redundant DNS infrastructure.</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-lock nb-text-primary-green" title="Domain Theft Protection Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Domain Theft Protection</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Protect your Domain from being transferred out accidentally or
                            without your permission with our free Domain Theft Protection.</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-mail-bulk nb-text-primary-blue" title="Free Mail Forwards Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Free Mail Forwards</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Create free email forwards and automatically redirect your email to
                            existing email accounts.</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-cog nb-text-primary-red" title="Easy to use Control Panel"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Easy to use Control Panel</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Use our intuitive Control Panel to manage your domain name, configure
                            email accounts, renew your domain name and buy more services.</h2>
                    </div>

                    <div className="nb-p-2">
                        <i className=" nb-mb-2 la-3x las la-tools nb-text-primary-bunty" title="Bulk Tools Icon"></i>
                        <h1 className="nb-text-xl nb-font-bold nb-mb-2">Bulk Tools</h1>
                        <h2 className="nb-text-sm nb-tracking-wider nb-text-left">Easy-to-use bulk tools to help you Register, Renew, Transfer and make
                            other changes to several Domain Names in a single step.</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FeatureTextOne;