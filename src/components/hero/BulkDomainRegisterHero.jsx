import React from 'react';
import {Link} from 'react-router-dom'

function BulkDomainRegisterHero() {
    return(
    <>
        <section className="nb-py-8">
            <div className="nb-container">
                <h1 className="nb-text-2xl lg:nb-text-4xl nb-text-center nb-font-bold nb-text-primary-bunty nb-mb-2">Get the Best
                    Domain for your Business</h1>
                <h2 className="nb-text-sm lg:nb-text-2xl nb-text-center nb-font-medium nb-text-primary-blue nb-mb-4">Register with Noobbot and avail ₹100 worth of Free Services with every Domain you Register</h2>
            </div>
            <form className="nb-w-full nb-flex nb-flex-col" action="" method="">
                <div className="nb-grid nb-grid-cols-1 lg:nb-grid-cols-5 nb-gap-4">
                    <div className="lg:nb-p-8 nb-col-span-3">
                        <div className="nb-container nb-bg-white">

                            <div className="placeholder-wrapper nb-relative">

                                <textarea name="bulkDomainSearch" id="bulDomainSearch"
                                    placeholder="Check upto 15 domain names"
                                    className="nb-h-64 nb-rounded nb-w-full nb-border-primary-blue focus:nb-border-primary-blue focus:nb-outline-0 nb-border-2 nb-border-r-2 nb-p-2 nb-bg-gray-100 focus:nb-bg-transparent nb-text-primary-bunty nb-text-xl nb-mb-2 nb-relative nb-top-0"></textarea>
                            </div>
                        
                            <div className="nb-flex nb-items-center">
                                <Link to="#" className="nb-text-lg nb-bg-transparent nb-text-primary-bunty nb-border-2 hover:nb-border-0 nb-border-primary-bunty hover:nb-text-white hover:nb-bg-primary-bunty nb-rounded nb-p-2 nb-font-bold">Register a Domain</Link>
                                <Link to="#" className="nb-text-lg nb-bg-transparent nb-text-primary-green nb-border-2 hover:nb-border-0 nb-border-primary-green hover:nb-text-white hover:nb-bg-primary-green nb-rounded nb-p-2 nb-font-bold md:nb-ml-2">Transfer Domain</Link>
                            </div>

                        </div>
                    </div>

                    <div className="lg:nb-p-8 nb-col-span-2">
                        <p className="nb-text-xl nb-text-primary-bunty nb-pb-2">Most Popular Domain Extensions:</p>
                        <div className="nb-grid nb-grid-cols-3 md:nb-grid-cols-5 nb-gap-4">
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="conb-mTld" id="conb-mTld" />
                                <label for="conb-mTld" className="nb-ml-1 nb-font-medium">com</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="netTld" id="netTld" />
                                <label for="netTld" className="nb-ml-1 nb-font-medium">net</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="inTld" id="inTld" />
                                <label for="inTld" className="nb-ml-1 nb-font-medium">in</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="orgTld" id="orgTld" />
                                <label for="orgTld" className="nb-ml-1 nb-font-medium">org</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="onlineTld" id="onlineTld" />
                                <label for="onlineTld" className="nb-ml-1 nb-font-medium">online</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="liveTld" id="liveTld" />
                                <label for="liveTld" className="nb-ml-1 nb-font-medium">live</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="bizTld" id="bizTld" />
                                <label for="bizTld" className="nb-ml-1 nb-font-medium">biz</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="coTld" id="coTld" />
                                <label for="coTld" className="nb-ml-1 nb-font-medium">co</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="infoTld" id="infoTld" />
                                <label for="infoTld" className="nb-ml-1 nb-font-medium">info</label>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <input type="checkbox" name="clubTld" id="clubTld" />
                                <label for="clubTld" className="nb-ml-1 nb-font-medium">club</label>
                            </div>
                        </div>
{/* 
                        <div className="nb-grid nb-grid-cols-2 md:nb-grid-cols-4 nb-mt-4">
                            <div className="nb-flex nb-items-center">
                                <img src="/images/tlds/dot-club.png" className="nb-h-10" alt="Dot Club" />
                                <p className="nb-text-sm nb-font-bold nb-text-primary-blue nb-ml-1">₹ 199</p>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <img src="/images/tlds/dot-in.png" className="nb-h-10" alt="Dot In" />
                                <p className="nb-text-sm nb-font-bold nb-text-primary-bunty nb-ml-1">₹ 199</p>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <img src="/images/tlds/dot-online.png" className="nb-h-10" alt="Dot Online" />
                                <p className="nb-text-sm nb-font-bold nb-text-primary-green nb-ml-1">₹ 199</p>
                            </div>
                            <div className="nb-flex nb-items-center">
                                <img src="/images/tlds/dot-co.png" className="nb-h-10" alt="Dot Co" />
                                <p className="nb-text-sm nb-font-bold nb-text-primary-red nb-ml-1">₹ 199</p>
                            </div>                
                        </div> */}

                        <input
                        className="nb-rounded h-16 nb-border-primary-blue nb-border-2 nb-p-2 nb-text-xl nb-font-bold nb-bg-primary-blue nb-text-white nb-cursor-pointer nb-w-full nb-mt-4"
                        type="submit" 
                        value="Search for Domain Name(s)" 
                        />
                    </div>

                </div>
            </form>
        </section>
    </>
    )
}
export default BulkDomainRegisterHero;